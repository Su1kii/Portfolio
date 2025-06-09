"use client";
import { useRef } from "react";
import Card from "@/app/components/Card";
import { Globe } from "@/app/components/globe";
import CopyEmailButton from "@/app/components/CopyEmailButton";

const About = () => {
  const grid2Container = useRef<HTMLDivElement>(null);

  const topTechStack = [
    "html5",
    "css3",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "tailwindcss",
    "prisma",
    "postgresql",
    "mongodb",
    "vercel",
    "git",
    "github",
    "visualstudiocode",
  ];

  const bottomTechStack = [
    "html5",
    "css3",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "tailwindcss",
    "prisma",
    "postgresql",
    "mongodb",
    "vercel",
    "git",
    "github",
  ];

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div
          className="relative flex items-end grid-default-color grid-1 overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/coding2.jpg')" }}
        >
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-indigo to-transparent z-0" />
          <img
            src="steven.jpg"
            className="absolute bottom-0 right-4 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-2 border-white shadow-md z-10"
            alt="Steven Echeverria"
          />
          <div className="z-10 pr-36 sm:pr-48">
            <p className="headtext">Hi, I'm Steven Echeverria</p>
            <p className="subtext">
              I build full-stack web applications with clean design, responsive
              layouts, and real-world functionality using modern technologies.
            </p>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-5xl text-gray-500 absolute top-4 tracking-wide z-0">
              BEYOND THE CODE
            </p>
            <Card
              style={{ rotate: "12deg", top: "18%", left: "10%" }}
              text="🔊 English Speaker"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "18%", left: "50%" }}
              text="🗣️Spanish Speaker"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "8deg", top: "40%", left: "20%" }}
              text="🎧 Music Lover"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "60%", left: "10%" }}
              text="🏀 Basketball"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-10deg", top: "60%", left: "50%" }}
              text="🎨 Photoshop Skills"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "18deg", top: "75%", left: "30%" }}
              text="✨ After Effects"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Utah but I'm open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5 relative flex flex-col justify-center items-center text-center gap-6 overflow-hidden pt-10 pb-14">
          <div className="z-10 max-w-xl px-4">
            <p className="headtext mb-2">💻 Tech Stack</p>
            <p className="subtext">
              I specialize in using modern languages, frameworks, and tools that
              help me build full-stack web applications that are fast, scalable,
              and user-friendly.
            </p>
          </div>

          {/* Fast Row */}
          <div className="w-full relative h-16 overflow-hidden">
            <div className="flex animate-marquee-right gap-10 w-max">
              {[...Array(2)].flatMap((_, loopIndex) =>
                topTechStack.map((tech, techIndex) => (
                  <img
                    key={`top-${tech}-${loopIndex * 100 + techIndex}`}
                    src={`${tech}.svg`}
                    alt={tech}
                    title={tech.toUpperCase()}
                    className="h-9 w-9 sm:h-10 sm:w-10 hover:scale-110 transition-transform duration-200"
                  />
                ))
              )}
            </div>
          </div>

          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Slow Row */}
          <div className="w-full relative h-16 overflow-hidden">
            <div className="flex animate-marquee-left gap-10 w-max">
              {[...Array(2)].flatMap((_, loopIndex) =>
                bottomTechStack.map((tech, techIndex) => (
                  <img
                    key={`bottom-${tech}-${loopIndex * 100 + techIndex}`}
                    src={`${tech}.svg`}
                    alt={tech}
                    title={tech.toUpperCase()}
                    className="h-9 w-9 sm:h-10 sm:w-10 hover:scale-110 transition-transform duration-200"
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
