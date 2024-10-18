import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div id="top" className="flex flex-col items-center w-1/2">
      <section className="pt-40">
        <div className="text-3xl text-center">Hey! I'm Manav</div>
        <div>
          <div className="mt-5 text-pretty text-center">
            I'm a Software Engineer specializing in Backend. I have experience
            working in fields such as Blockchain & Game Dev.
          </div>
          <div className="mt-5 text-pretty text-center">
            I enjoy building and learning about software and how it works. It
            was my passion of video games that brought me into the realm of
            software engineering.
          </div>
          <div className="mt-5 text-pretty text-center">
            I have won over 5 hackathons and I'm always open to collaboration,
            do reach out to me if you'd like to work together.
          </div>
          <div className="mt-5 text-pretty text-center">
            Apart from code, i'm passionate about video games, astronomy &
            cricket. Also, I love pizza (w/ extra cheeze ofc).
          </div>
        </div>
      </section>
      <section id="blogs" className="pt-40 h-screen">
        <div className="text-2xl">Blogs</div>
        <div></div>
      </section>
      <section id="projects" className="flex flex-col items-center pt-32 gap-8">
        <Projects />
      </section>
      <section id="contact" className="pt-32 h-screen">
        <div className="text-2xl">Contact</div>
      </section>
    </div>
  );
}
