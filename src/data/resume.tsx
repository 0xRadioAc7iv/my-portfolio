import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Manav Gadhiya",
  initials: "MG",
  url: "",
  description: "Developer, Gamer, Procrastinator",
  summary: `Hey! I'm Manav 👋

I'm a Software Engineer specializing in Backend. I have experience working in fields
such as Blockchain & Game Dev. I enjoy building and learning about software and how it works. 💻

I have won over 5 hackathons 🏆 and I'm always open to collaboration, so do reach out to me if you'd like to work together.

Apart from code, i'm passionate about video games, astronomy &
            cricket. Also, I love pizza 🍕 (w/ extra cheeze ofc).
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
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      title: "Sol UI",
      href: "https://sol-ui.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://sol-ui.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/sol-ui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/solui.mp4",
    },
    {
      title: "Foundry Stablecoin",
      href: "https://github.com/Not-Sarthak/defi-stablecoin",
      dates: "August 2024",
      active: true,
      description:
        "This project is meant to be a stablecoin where users can deposit WETH and WBTC in exchange for a token that will be pegged to the USD.",
      technologies: ["Foundry", "Solidity", "Chainlink", "Open Zeppelin"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/defi-stablecoin",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/stablecoin.mp4",
    },
    {
      title: "Merkle Airdrop",
      href: "https://github.com/Not-Sarthak/merkle-airdrop",
      dates: "August 2024",
      active: true,
      description:
        "An introduction to the Merkle Airdrop and Signatures project",
      technologies: ["Foundry", "Solidity", "EIP-4844"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/merkle-airdrop",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/merkle.png",
      video: "",
    },
    {
      title: "AO Calculator",
      href: "https://ao-unit-converter.ar-io.net/",
      dates: "September 2024",
      active: true,
      description:
        "Convert effortlessly between AO and Armstrong units. No need to count zeroes.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Arweave", "AO"],
      links: [
        {
          type: "Website",
          href: "https://ao-unit-converter.ar-io.net/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/ao-unit-converter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/ao-calculator.mp4",
    },
    {
      title: "Eth Mumbai",
      href: "https://mumbaieth.vercel.app/",
      dates: "March 2024",
      active: true,
      description:
        "A website for EthMumbai with an SVG logo that changes colors based on user preferences and allows users to mint it as a NFT.",
      technologies: ["Next.js", "JavaScript", "TailwindCSS", "Zora"],
      links: [
        {
          type: "Website",
          href: "https://mumbaieth.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/eth-mumbai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/ethmumbai.png",
      video: "",
    },
    {
      title: "BaseWave",
      href: "https://www.youtube.com/watch?v=i0FlVIL-6FM",
      dates: "May 2024",
      active: true,
      description:
        "Frictionless, Decentralized Recurring Payments for Builders on Base built at Onchain Summer [FBI]",
      technologies: [
        "Next.js",
        "TypeScript",
        "Hardhat",
        "JavaScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Demo",
          href: "https://www.youtube.com/watch?v=i0FlVIL-6FM",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ForkingAwesome/basewave",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/basewave.svg",
      video: "",
    },
    {
      title: "FuelCaster",
      href: "https://github.com/ForkingAwesome/fuelcaster",
      dates: "April 2024",
      active: true,
      description:
        "FuelCaster, featuring the VadaPav Token, is a faucet for the Fuel Network built on Farcaster Frames.",
      technologies: ["Next.js", "Farcaster Frames", "Fuel", "Sway"],
      links: [
        {
          type: "Website",
          href: "https://x.com/0xSarthak13/status/1788907538043531380",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ForkingAwesome/fuelcaster",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/fuelcaster.png",
      video: "",
    },
    {
      title: "Quill",
      href: "https://quill-flow.vercel.app/",
      dates: "July 2023",
      active: true,
      description:
        "Quill, built on the Flow blockchain, empowers bloggers with ownership, control, and direct monetization of their content.",
      technologies: ["React.js", "JavaScript", "Cadence", "CSS", "Material UI"],
      links: [
        {
          type: "Website",
          href: "https://quill-flow.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/quill",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/quill.png",
      video: "",
    },
  ],
} as const;
