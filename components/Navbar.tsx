import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex gap-6 pt-8 text-center justify-center sticky top-0 left-0 w-full backdrop-blur-lg">
      <Link href="#top" className="text-lg hover:text-gray-500">
        about
      </Link>
      <Link href="#blogs" className="text-lg hover:text-gray-500">
        blogs
      </Link>
      <Link href="#projects" className="text-lg hover:text-gray-500">
        projects
      </Link>
      <div className="relative group">
        <div className="text-lg hover:text-gray-500">experience</div>

        <div
          className="text-center font-bold w-32 absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                      bg-white text-black text-sm rounded-md p-2 -bottom-10 left-1/2 transform -translate-x-1/2
                      transition-all duration-300 ease-in-out shadow-lg"
        >
          looking for work
        </div>
      </div>
      <Link href="#contact" className="text-lg hover:text-gray-500">
        contact
      </Link>
    </nav>
  );
};

export default Navbar;
