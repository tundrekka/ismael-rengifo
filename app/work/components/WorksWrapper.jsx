"use client";
import React, { useEffect, useState } from "react";
import SwipperClient from "./SwipperClient";
import ButtonsClient from "./ButtonsClient";
import { useSearchParams } from "next/navigation";
import { IoMdOpen } from "react-icons/io";


const allItems = [
  {
    num: "01",
    category: "frontend",
    title: "WobJay",
    slug: "wobjay",
    description:
      "In this modern website builder, as the frontend team lead, I have driven the evolution of the product from its inception to its current state. During this time, I have fostered the professional growth of other developers. The main purpose of this project is for the creator of the page to not have to write any code. For privacy reasons, I can't share the admin site, the photo and link are from the public site (still in dev).",
    stack: [
      { name: "React" },
      { name: "Typescript" },
      { name: "NextJs" },
      { name: "React-Query" },
      { name: "TailwindCSS" },
      { name: "axios" },
    ],
    image: "/assets/work/wobjay-cover-thumb.png",
    live: "https://wobjay.com/",
    github: "",
    // ! improved these repeted properties, this is used also in resume>experience page
    projectTime: "year 2021 - present",
  },
  {
    num: "02",
    category: "frontend",
    title: "StyleGuide Builder",
    slug: "styleguide-builder",
    description:
      "As a Front Developer I meticulously crafted a pixel-perfect frontend implementation of a complex design, adhering strictly to the provided Figma design. Using their project structure and adding custom fixes, I recreated every visual element, animation, and transition. This project was about an AI to generate your branding. They just needed me to do the UI, Quick Job.",
    stack: [
      { name: "React" },
      { name: "CSS" },
      { name: "Figma" },
      { name: "TypeScript" },
    ],
    image: "/assets/work/styleguide-figma-frame-thumb.jpg",
    live: "",
    github: "",
    projectTime: "year 2024",
    moreImages: [
      { url: "/assets/work/styleguide-figma-frame.jpg", label: "Figma frame" },
      { url: "/assets/work/styleguide-result-vid.mp4", label: "Web Result" },
    ],
  },
  {
    num: "03",
    category: "frontend",
    title: "Heroes Fest",
    slug: "heroes-fest",
    description:
      "I was one of the developers responsible for creating this landing page using React. It's an event held in Colombia for entrepreneurs. They provided me the design and General Info. The events calendar (grid) was really fun and challenging to make it responsive. They update the website every year so the website must have changed since I worked on it.",
    stack: [{ name: "React" }, { name: "SCCS" }, { name: "Responsive Design" }],
    image: "/assets/work/heroes-fest-view-pc-thumb.png",
    live: "https://www.innpulsacolombia.com/heroes-fest/",
    github: "",
    projectTime: "year 2021",
    moreImages: [
      { url: "/assets/work/heroes-fest-2021.png", label: "Landing Page" },
    ],
  },
  {
    num: "04",
    category: "frontend",
    title: "Keeper",
    slug: "keeper",
    description:
      "I was a Junior Frontend Dev in this project, I did connections between components and created new ones in the dashboard admin of this web app. This project is about a password manager and other personal things focused in strong security. I loved to learn the importance of cybersecurity",
    stack: [
      { name: "Typescript" },
      { name: "React" },
      { name: "Styled Components" },
      { name: "Storybook" },
    ],
    image: "/assets/work/keeper-thumb.png",
    live: "https://www.keepersecurity.com/",
    github: "",
    projectTime: "2021 year",
    moreImages: [
      { url: "/assets/work/keeper-empty-state.png", label: "Empty state" },
    ],
  },
  {
    num: "05",
    category: "frontend",
    title: "TIAA Bank",
    slug: "tiaa-bank",
    description:
      "I was a Junior Frontend Dev in this project, Like an Intern. I used angular to build some tables and I had to work in the UI of a chatbot, I had to check that the ui works in many brands of phones, also in PC. I learned a lot in that project.",
    stack: [{ name: "Angular" }, { name: "React" }],
    image: "/assets/work/TIAA-cover-thumb.png",
    live: "https://www.tiaa.org/public",
    github: "",
    projectTime: "year 2021",
  },
  {
    num: "06",
    category: "fullstack",
    title: "Amovlar website",
    slug: "amovlar",
    description:
      "This was my first paid job, A senior developer that one of my friends knew contacted me to develop a website for a furniture store. I was fullstack using PHP and SCSS and the Senior just checks at the end of the day that everything was fine.",
    stack: [{ name: "PHP" }, { name: "SCSS" }, { name: "Responsive Design" }],
    image: "/assets/work/amovlar-thumb.png",
    live: "",
    github: "",
    projectTime: "year 2020",
  },
];

const ContentClient = () => {
  const params = useSearchParams();
  const projectSlug = params.get("project_name");

  const calculateSelectedProject = () => {
    if (!projectSlug) return allItems[0];
    const project = allItems.find((item) => item.slug === projectSlug);
    return project ? project : allItems[0];
  };

  const [selectedProject, setProject] = useState(calculateSelectedProject());
  const [projectsState, setProjects] = useState(allItems);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (projectSlug) {
      // ! improve O complexity
      // look for the slug and place it first
      const project = allItems.find((item) => {
        return item.slug === projectSlug;
      });
      const finalProject = project ? project : allItems[0];
      setProjects([
        finalProject,
        ...allItems.filter((item, index) => item.slug !== projectSlug),
      ]);
    } else {
      // setProjects(externalProjects);
    }
    setIsLoaded(true);
    return () => {};
  }, []);
  return (
    <>
      <div className="w-full xl:w-[47%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
        <div className="flex flex-col gap-[30px] h-[50%]">
          {/* outline num */}
          {/* <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div> */}
          {/* project category */}
          <h1 aria-label="Work Project Name" className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            {selectedProject.title}
          </h1>
          {/* project description */}
          <p className="text-white/60 leading-[1.9]">
            {selectedProject.description}
          </p>
          {/* stack */}
          <ul className="flex flex-wrap gap-4">
            {selectedProject.stack.map((item, index) => {
              return (
                <li key={index} className="text-md text-accent">
                  {item.name}
                  {/* remove the last comma */}
                  {index !== selectedProject.stack.length - 1 && ","}
                </li>
              );
            })}
          </ul>
          <p className="text-white/70 text-sm">
            Time: {selectedProject.projectTime}
          </p>
          {/* border */}
          <div className="border border-white/20"></div>
          {/* buttons */}
          <ButtonsClient project={selectedProject} />

          {selectedProject.moreImages && (
            <details className="z-20 p-2 rounded shadow-lg">
              <summary className="cursor-pointer text-md text-white/50">
                More images
              </summary>
              {selectedProject.moreImages.map((image, index) => {
                return (
                  <p className="mt-2" key={index + image.url}>
                    <a target="_blank" className="underline text-sm" href={image.url} >
                      {image.label}
                      <IoMdOpen className="inline-block ml-2 text-white/80" />
                    </a>
                  </p>
                );
              })}
            </details>
          )}
        </div>
      </div>
      <div className="w-full xl:w-[49%]">
        <SwipperClient
          isLoaded={isLoaded}
          projects={projectsState}
          setProject={setProject}
        />
      </div>
    </>
  );
};

export default ContentClient;
