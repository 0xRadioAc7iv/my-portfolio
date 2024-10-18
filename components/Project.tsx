import Image from "next/image";
import Link from "next/link";

interface ProjectData {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  github: string;
}

const Project = ({
  image,
  imageAlt,
  title,
  description,
  github,
}: ProjectData) => {
  return (
    <div className="flex flex-col rounded-lg p-2">
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-xl mt-4">{title}</h3>
      <p className="mt-2 text-justify">{description}</p>
      <Link href={github} className="mt-2 hover:underline">
        Github
      </Link>
    </div>
  );
};

export default Project;
