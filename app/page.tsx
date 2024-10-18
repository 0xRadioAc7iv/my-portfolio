import Project from "@/components/Project";
import Image from "next/image";

export default function Home() {
  return (
    <div id="top" className="flex flex-col items-center pr-6">
      <section className="pt-20">
        <div className="flex flex-col items-center">
          <Image
            src="/profile.jpg"
            alt="My Photo"
            width="120"
            height="120"
            className="rounded-lg"
          />
          <div className="text-4xl my-5">Hey! I'm Manav</div>
          <div>
            <div className="mt-5 text-pretty">
              I'm a Software Engineer specializing in Backend. I have experience
              working in fields such as Blockchain & Game Dev.
            </div>
            <div className="mt-5 text-pretty">
              I enjoy building and learning about software and how it works. It
              was my passion of video games that brought me into the realm of
              software engineering.
            </div>
            <div className="mt-5 text-pretty">
              I have won over 5 hackathons and I'm always open to collaboration,
              do reach out to me if you'd like to work together.
            </div>
            <div className="mt-5 text-pretty">
              Apart from code, i'm passionate about video games, astronomy &
              cricket. Also, I love pizza (w/ extra cheeze ofc).
            </div>
          </div>
        </div>
      </section>
      <section id="blogs" className="pt-40 h-screen">
        <div className="text-2xl">Blogs</div>
        <div></div>
      </section>
      <section
        id="projects"
        className="flex flex-col items-center pt-32 h-screen gap-8"
      >
        <div className="text-2xl">Projects</div>
        <div className="gap-4 w-2/3">
          <Project
            image="/profile.jpg"
            imageAlt="Project 1"
            title="Project 1"
            description="A full-stack music streaming application that allows users to
            stream and organize their favorite tracks."
            github="https://github.com/0xRadioAc7iv"
          />
          <Project
            image="/profile.jpg"
            imageAlt="Project 1"
            title="Project 1"
            description="A full-stack music streaming application that allows users to
            stream and organize their favorite tracks."
            github="https://github.com/0xRadioAc7iv"
          />
        </div>
      </section>
      <section id="contact" className="pt-32 h-screen">
        <div className="text-2xl">Contact</div>
      </section>
    </div>
  );
}
