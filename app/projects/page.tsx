import { Project } from "app/components/project";

export default function Page() {
  return (
    <section>
      <Project
        name="Rate Limiting Library"
        description="A highly configurable & performant rate-limiting library for node.js"
        sourceLink="https://github.com/0xRadioAc7iv/rate-limiter"
        websiteLink="https://rate-limiter.0xradioactiv.xyz/"
      />
      <Project
        name="Mock Data Generator"
        description="The Mock Data Generator is a powerful and user-friendly tool designed for developers to quickly generate and interact with mock data."
        sourceLink="https://github.com/0xRadioAc7iv/mock-data-generator"
        websiteLink="https://mock-data-generator-mu.vercel.app/"
      />
      <Project
        name="E-Commerce Platform"
        description="A feature-rich e-commerce platform with authentication, payment integration, and wishlist/cart functionalities."
        sourceLink="https://github.com/0xRadioAc7iv/E-Commerce-Platform"
      />
      <div>More to come...</div>
    </section>
  );
}
