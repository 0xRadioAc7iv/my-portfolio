import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Manav Gadhiya
      </h1>
      <p className="mb-4">
        I'm a Backend Engineer. I love building things (often from scratch) and
        understanding how they work under the hood. I thrive on solving
        challenging problems that push me to grow as a software engineer. Also,
        I'm a Futurist and I love reading about Quantum Computing, AI &
        Blockchains.
      </p>
      <p className="mb-4">
        I've explored Blockchain, Game Development, and even Blender, which
        sparked my curiosity and gave me the chance to dive into new
        technologies. It's these experiences that keep me excited about what's
        next.
      </p>
      <p className="mb-4">
        In my free time, I'm an avid fan of cricket, F1, and video games. Video
        games, in particular, sparked my curiosity about software development,
        leading me to dive deep into coding and game mechanics.
      </p>
      <p className="mb-4">
        I've had the chance to win 7 hackathons so far, but honestly, that's
        just the start. I'm really excited about what's ahead and all the cool
        projects I still have yet to build.
      </p>
      <div className="mt-8">
        <BlogPosts />
      </div>
    </section>
  );
}
