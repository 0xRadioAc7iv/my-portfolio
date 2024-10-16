import Image from "next/image";

export default function Home() {
  return (
    <div id="top" className="flex flex-col items-center gap-96 w-2/5">
      <section className="pt-20">
        <div className="flex flex-col items-center">
          <Image
            src="/profile.jpg"
            alt="My Photo"
            width="120"
            height="120"
            className="rounded-lg"
          />
          <div className="text-4xl mt-5">Hey! I'm Manav</div>
          <div>
            <div className="mt-10 text-pretty">
              I'm a Software Developer specializing in Backend. I have
              experience working in various fields such as Blockchain & Game
              Dev.
            </div>
            <div className="mt-5 text-pretty">
              I enjoy building and learning about software and how it works. It
              was my passion of gaming that brought me into the realm of
              software engineering.
            </div>
            <div className="mt-5 text-pretty">
              I have won over 5 hackathons and I'm always open to collaboration
              and excited to join new hackathon teams. Do reach out to me if
              you'd like to work together.
            </div>
            <div className="mt-5 text-pretty">
              Apart from code, i'm passionate about video games, astronomy &
              cricket. Also, I love pizza (w/ extra cheeze ofc).
            </div>
          </div>
        </div>
      </section>
      <section id="blogs" className="pt-32 h-screen">
        <div className="text-2xl">My Blogs</div>
        <div></div>
      </section>
      <section id="projects" className="pt-32 h-screen">
        Projects
      </section>
      <section id="contact" className="pt-32 h-screen">
        <div className="text-2xl">Contact</div>
      </section>
    </div>
  );
}
