import Link from "next/link";

const SidebarLinks = [
  { name: "about", link: "top" },
  { name: "blogs", link: "blogs" },
  { name: "projects", link: "projects" },
  { name: "experience", link: "experience" },
  { name: "contact", link: "contact" },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 text-4xl justify-center fixed top-0 h-screen w-64">
      {SidebarLinks.map((link) => (
        <Link key={link.name} href={`#${link.link}`} className="sidebar-hover">
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
