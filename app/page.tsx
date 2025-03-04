import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Manav Gadhiya
      </h1>
      <p className="mb-4">
        I'm a Backend Engineer passionate about scalable, high-performance, and
        complex systems. I love building things from scratch and understanding
        how they work under the hood. My curiosity has led me to explore
        Blockchain, Game Development, and even Blender. As a futurist, I'm
        deeply interested in Quantum Computing, AI, always seeking to understand
        the technologies shaping tomorrow.
      </p>
      <p className="mb-4">
        I've had the opportunity to win 7 hackathons, building projects ranging
        from an Automated on-chain Poker AI Agent to an authentication system
        designed to make on-chain onboarding seamless and intuitive.
      </p>
      <p className="mb-4">
        Outside of coding, I'm an avid fan of cricket, F1, astronomy and video
        games. In fact, it was video games that sparked my fascination with
        software development, inspiring me to dive deep into coding and system
        design.
      </p>
      <div className="mt-8">
        <BlogPosts />
      </div>
    </section>
  );
}
