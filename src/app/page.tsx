"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState } from "react";
import { RoughNotation } from "react-rough-notation";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [showAll, setShowAll] = useState(false);

  const VISIBLE_PROJECTS = 4;

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-center">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
          <div className="flex-col flex flex-1 justify-center items-center space-y-1.5">
            <BlurFade
              delay={BLUR_FADE_DELAY}
              className="text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none flex items-center gap-3"
            >
              <div className="font-serif italic main-text-in">I'm</div>
              <RoughNotation
                type="box"
                show={true}
                strokeWidth={3}
                animationDuration={400}
                animationDelay={1000}
                color="rgb(253 224 71 / 1)"
              >
                <span className="font-serif italic main-text-in">
                  {DATA.name.split(" ")[0]}
                </span>
              </RoughNotation>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 pb-5 flex-col justify-center items-center gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="justify-center flex items-center w-32 rounded-lg bg-foreground text-background px-3 py-0.5 text-sm">
              About
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-md text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Recent Work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I've worked on a broad spectrum of projects, specializing in{" "}
                  <b className="mr-1 dark:text-white text-black">
                    backend development
                  </b>
                  and{" "}
                  <b className="dark:text-white text-black">
                    blockchain technologies
                  </b>
                  . Here are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects
              .slice(0, showAll ? DATA.projects.length : VISIBLE_PROJECTS)
              .map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleToggle}
              className="px-4 py-2 text-white dark:text-black"
            >
              {showAll ? (
                <div className="text-sm bg-black dark:bg-white flex items-center gap-2 rounded-md px-2 py-0.5 hover:scale-95 transition-all">
                  Show Less
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              ) : (
                <div className="text-sm bg-black dark:bg-white flex items-center gap-2 rounded-md px-2 py-0.5 hover:scale-95 transition-all">
                  Show More
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              )}
            </button>
          </div>
        </div>
      </section>
      {/* <section id="work">
        <div className="flex min-h-0 flex-col justify-center items-center gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="justify-center flex w-42 rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Work Experience
            </div>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section> */}
      {/* <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Wins
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Weird Flex, but Ok
                </h2>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm always open to freelance work. If you're interested, feel
                free to{" "}
                <RoughNotation
                  type="highlight"
                  show={true}
                  strokeWidth={3}
                  animationDuration={400}
                  animationDelay={1000}
                  color="rgb(253 224 71 / 1)"
                >
                  <Link
                    href="mailto:manav18gadhiya@gmail.com"
                    className="text-black hover:underline"
                  >
                    email
                  </Link>{" "}
                  /{" "}
                  <Link
                    href="mailto:manav18gadhiya@gmail.com"
                    className="text-black hover:underline"
                  >
                    dm
                  </Link>
                </RoughNotation>{" "}
                me.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
