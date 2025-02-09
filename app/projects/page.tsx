import { Project } from "app/components/project";

export default function Page() {
  return (
    <section>
      <Project
        name="Rate Limiting Library"
        description="A highly configurable rate-limiting middleware for Express.js applications."
        sourceLink="https://github.com/0xRadioAc7iv/rate-limiter"
        websiteLink="https://www.npmjs.com/package/@radioac7iv/rate-limiter"
      />
      <Project
        name="Node.js Express Template"
        description="A robust and scalable boilerplate for building modern web applications with Node.js, Express, and TypeScript."
        sourceLink="https://github.com/0xRadioAc7iv/express-template"
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
      <Project
        name="URL Shortener"
        description="A Basic URL Shortener Application built using Node.js, Express.js & EJS"
        sourceLink="https://github.com/0xRadioAc7iv/url-shortener"
      />
    </section>
  );
}
