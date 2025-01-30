import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Manav Gadhiya",
  initials: "MG",
  url: "https://www.0xradioactiv.xyz",
  description: "Developer, Gamer, Explorer",
  summary: `Hey! I'm Manav 👋

I'm a Backend Engineer who loves building things and understanding how they work under the hood. I am an Explorer and i've worked on multiple Blockchains, Game Development & Blender in the Past.

I have won over 7 hackathons 🏆 and love working with people on projects, so do reach out to me if you'd like to work together. I'm always up for a challenge and excited to learn something new.

Outside of coding, I'm into video games, crickets & astronomy. Also, I love pizza 🍕 (w/ extra cheeze ofc).
`,
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Solidity",
    "Databases",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blogs", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "manav18gadhiya@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/0xRadioAc7iv/",
        icon: Icons.github,

        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/0xradioac7iv",
        icon: Icons.globe,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manavgadhiya/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/0xRadioAc7iv",
        icon: Icons.x,

        navbar: true,
      },
      gm: {
        name: "Work",
        url: "",
        icon: Icons.work,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    // {
    //   company: "",
    //   href: "",
    //   badges: [],
    //   location: "",
    //   title: "",
    //   logoUrl: "",
    //   start: "",
    //   end: "",
    //   description:
    //     "",
    // }
  ],

  projects: [
    {
      title: "Stellock",
      href: "https://github.com/0xRadioAc7iv/stellock",
      dates: "June 2024",
      active: true,
      description: "Stellock allows you to use your web2 logins on web3 dApps!",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Rust",
        "Soroban",
        "Prisma",
      ],
      links: [
        {
          type: "Demo",
          href: "https://youtu.be/sZ9Bmaunye0",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xRadioAc7iv/stellock",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/stellock.png",
      video: "",
    },
    {
      title: "Rate Limiting Library",
      href: "https://github.com/0xRadioAc7iv/rate-limiter",
      dates: "Dec 2024",
      active: true,
      description:
        "A Custom Rate Limiting Library for Node.js with Redis support.",
      technologies: ["Node.js", "Typescript"],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/@radioac7iv/rate-limiter",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xRadioAc7iv/rate-limiter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/rate-limiter.png",
      video: "",
    },
    {
      title: "Mock Data Generator",
      href: "https://mock-data-generator-mu.vercel.app/",
      dates: "January 2025",
      active: true,
      description:
        "The Mock Data Generator is a powerful and user-friendly tool designed for developers to quickly generate and interact with mock data.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Gemini Flash 2.0",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xRadioAc7iv/mock-data-generator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/mock_data_gen.png",
      video: "",
    },
    {
      title: "Foundry Stablecoin",
      href: "https://github.com/0xRadioAc7iv/foundry-defi-stablecoin-f23",
      dates: "June 2024",
      active: true,
      description:
        "This project is meant to be a stablecoin where users can deposit WETH and WBTC in exchange for a token that will be pegged to the USD.",
      technologies: ["Foundry", "Solidity", "Chainlink", "Open Zeppelin"],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xRadioAc7iv/foundry-defi-stablecoin-f23",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/stablecoin.mp4",
    },
    {
      title: "AO Token Deployer",
      href: "https://github.com/0xRadioAc7iv/token-deployer",
      dates: "June 2024",
      active: true,
      description: "A No Code Token Deployer for Arweave's AOS",
      technologies: ["React", "Typescript", "Tailwind", "Lua"],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xRadioAc7iv/token-deployer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/token-deployer.png",
      video: "",
    },
    {
      title: "HTTP Server from Scratch",
      href: "https://github.com/0xRadioAc7iv/http-server-from-scratch",
      dates: "September 2024",
      active: true,
      description: "HTTP Server Implementation from Scratch in Typescript",
      technologies: ["Node.js", "TypeScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xRadioAc7iv/http-server-from-scratch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/http-server.png",
      video: "",
    },
    {
      title: "Weather API Service",
      href: "https://github.com/0xRadioAc7iv/weather-api-with-caching",
      dates: "October 2024",
      active: true,
      description: "Simple Weather API with Redis Caching",
      technologies: ["Express.js", "Node.js", "Redis"],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xRadioAc7iv/weather-api-with-caching",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/weather-api.jpg",
      video: "",
    },
    {
      title: "Load Balancer",
      href: "https://github.com/0xRadioAc7iv/load-balancer-nodejs",
      dates: "October 2024",
      active: true,
      description: "Load Balancer Implementation from Scratch using Node.js",
      technologies: ["Express.js", "Node.js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xRadioAc7iv/load-balancer-nodejs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/load-balancer.jpg",
      video: "",
    },
  ],
} as const;
