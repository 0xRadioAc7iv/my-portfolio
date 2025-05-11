import { getSpotifyAccessToken } from "app/utils/spotify";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = await getSpotifyAccessToken();
  const { searchParams } = new URL(request.url);

  const action = searchParams.get("action");
  const id = searchParams.get("id");

  const headers = { Authorization: `Bearer ${token}` };

  try {
    // Pause currently playing song
    if (action === "pause") {
      const pauseRes = await fetch(
        "https://api.spotify.com/v1/me/player/pause",
        {
          method: "PUT",
          headers,
        }
      );

      if (pauseRes.status === 204) {
        return NextResponse.json({ status: "Playback paused" });
      } else {
        return NextResponse.json({
          error: "Failed to pause playback",
        });
      }
    }

    // Play the song with the provided id
    if (action === "play" && id) {
      const playRes = await fetch("https://api.spotify.com/v1/me/player/play", {
        method: "PUT",
        headers,
        body: JSON.stringify({ uris: [`spotify:track:${id}`] }),
      });

      if (playRes.status === 204) {
        return NextResponse.json({ status: `Playing track ${id}` });
      } else {
        return NextResponse.json({
          error: "Failed to play track",
          trackId: id,
        });
      }
    }

    // Fetch data
    const [topTracksRes, nowPlayingRes, followedRes] = await Promise.all([
      fetch("https://api.spotify.com/v1/me/top/tracks?limit=10", { headers }),
      fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers,
      }),
      fetch("https://api.spotify.com/v1/me/following?type=artist&limit=50", {
        headers,
      }),
    ]);

    // Handle invalid access token
    if (
      [topTracksRes, nowPlayingRes, followedRes].some((r) => r.status === 401)
    ) {
      return NextResponse.json({
        error: "Invalid or expired token. Check refresh flow.",
      });
    }

    const topTracksData = await topTracksRes.json();
    const nowPlayingData =
      nowPlayingRes.status === 204 ? null : await nowPlayingRes.json();
    const followedData = await followedRes.json();

    const topTracks = (topTracksData.items || []).map((track) => ({
      name: track.name,
      id: track.id,
      artists: track.artists.map((a) => a.name),
      playUrl: `/spotify?action=play&id=${track.id}`,
    }));

    const followedArtists = (followedData.artists?.items || []).map(
      (artist) => artist.name
    );

    const currentlyPlaying = nowPlayingData?.item
      ? {
          name: nowPlayingData.item.name,
          id: nowPlayingData.item.id,
          artists: nowPlayingData.item.artists.map((a) => a.name),
        }
      : null;

    return NextResponse.json({
      topTracks,
      currentlyPlaying,
      followedArtists,
      pauseUrl: `/spotify?action=pause`,
    });
  } catch (err) {
    console.error("Spotify API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
