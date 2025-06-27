function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16 flex justify-center">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-neutral-600 dark:text-neutral-300 sm:flex">
        {[
          { label: "Email", href: "mailto:manav18gadhiya@gmail.com" },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/manavgadhiya",
          },
          { label: "X (Twitter)", href: "https://x.com/0xRadioAc7iv" },
          { label: "Github", href: "https://github.com/0xRadioAc7iv" },
          { label: "Blog", href: "https://radioactiv.hashnode.dev/" },
          { label: "Resume", href: "/my_resume.pdf" },
        ].map(({ label, href }) => (
          <li key={label}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              href={href}
            >
              <ArrowIcon />
              <p className="ml-2 h-7">{label}</p>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
