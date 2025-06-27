import { Experience } from "./components/experience";
import { Project } from "./components/project";
import { TechStackSection } from "./components/tech-stack-section";

export default function Page() {
  return (
    <section className="flex flex-col py-5">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-3xl font-semibold leading-none sm:text-5xl text-center">
          Hey, I'm Manav Gadhiya
        </h1>
      </div>

      <p className="mb-4 text-lg text-justify">
        I’m a Backend Developer. I’m passionate about building scalable,
        high-performance, and complex systems. I love building things from
        scratch and understanding how they work under the hood.
      </p>

      <p className="mb-4 text-lg text-justify">
        I've won 7 hackathons, building projects ranging from an Automated
        on-chain Poker AI Agent to an authentication system designed to make
        on-chain onboarding seamless and intuitive.
      </p>
      <p className="mb-10 text-lg text-justify">
        Outside of coding, i spend time watching cricket, F1, astronomy and
        playing video games.
      </p>

      <div className="mb-6 text-2xl font-bold">Tech Stack</div>

      <TechStackSection />

      {/* <div className="mb-6 text-2xl font-bold">Experience</div> */}

      {/* YET TO ADD MORE DETAILS */}
      {/* <div className="mb-6">
        <Experience
          title="Backend Developer"
          duration="June 2025 – July 2025"
          companyName=""
          description=""
          tasks={[{ text: "" }]}
          links={[{ label: "Live Demo", href: "https://demo.example.com" }]}
        />
      </div> */}

      <div className="mb-6 text-2xl font-bold">My Projects</div>

      <div className="mb-6">
        <div className="flex flex-col gap-4">
          <Project
            name="Rate Limiting Library"
            description="A highly flexible rate limiting solution for Node.js applications."
            sourceLink="https://github.com/0xRadioAc7iv/rate-limiter"
            npmLink="https://www.npmjs.com/package/@radioac7iv/rate-limiter"
            websiteLink="https://rate-limiter.0xradioactiv.xyz/"
            published={true}
            features={[
              {
                text: "Multi-framework Support: Seamlessly integrates with Express, Fastify & NestJS",
              },
              {
                text: "Storage Options: Compatible with Redis, MongoDB & In-Memory stores",
              },
              {
                text: "Quality Assured: 90% test coverage with comprehensive tests",
              },
              {
                text: "Advanced Features: Dynamic rate limiting, configurable options, optional logging",
              },
            ]}
          />
          <Project
            name="Decentralized Rendering System"
            description="A highly parallelized and cheap rendering platform"
            sourceLink="https://github.com/2BrokeGuys/rendering-frontend"
            websiteLink="https://renderbro.vercel.app/"
            features={[
              {
                text: "A distributed system to parallelize 3D rendering tasks across multiple worker nodes, reducing render time by 50x compared to single-node setups",
              },
              {
                text: "Built a decentralized 3D rendering platform where users submit jobs via a web UI and rendering is offloaded to external contributors incentivized through Solana-based crypto rewards",
              },
              {
                text: "Designed a serverless job orchestration pipeline using AWS SQS and Lambda to manage task scheduling, fault tolerance, and load balancing across untrusted worker nodes",
              },
            ]}
          />
          <Project
            name="SolRPC"
            description="RPC Aggregator for Solana"
            sourceLink="https://github.com/0xRadioAc7iv/solrpc"
            websiteLink="https://solrpc.vercel.app/"
            features={[
              {
                text: "Route requests through the lowest-latency RPC nodes based on real-time benchmarking — critical for games, high-frequency trading, and real-time apps.",
              },
              {
                text: "It provides multiple load balancing options depending on your dApp usage and traffic. Currently there are 4 options - Round-Robin, Least Connections, Least Latency and Weighted.",
              },
              {
                text: "Responses are automatically cached based on their nature. There are multiple caching methods - In-Memory, Redis and Memcached.",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
