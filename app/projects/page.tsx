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
        name="E-Commerce Platform MVP"
        description="A full-featured e-commerce platform with modern capabilities."
        sourceLink="https://github.com/0xRadioAc7iv/E-Commerce-Platform/"
        // websiteLink=""
        features={[
          { text: "JWT Auth w/ Password Reset using Email" },
          { text: "Wishlist and Cart functionality" },
          { text: "Stripe Integration for payments" },
          { text: "Search Functionality" },
        ]}
      />
      <Project
        name="Mock Data Generator"
        description="The Mock Data Generator is a powerful and user-friendly tool designed for developers to quickly generate and interact with mock data."
        sourceLink="https://github.com/0xRadioAc7iv/mock-data-generator"
        websiteLink="https://mock-data-generator-mu.vercel.app/"
        features={[
          {
            text: "Copy Data as SQL/MongoDB Insert Query",
          },
          {
            text: "Download Data as CSV & JSON",
          },
        ]}
      />
    </section>
  );
}
