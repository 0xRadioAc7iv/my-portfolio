import { Project } from "app/components/project";

export default function Page() {
  return (
    <section>
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
    </section>
  );
}
