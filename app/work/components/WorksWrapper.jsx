"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { IoMdOpen } from "react-icons/io";
import { allWorkItems } from "./data";
import SwipperClient from "./SwipperClient";
import ButtonsClient from "./ButtonsClient";
import { PortfolioSkeleton } from "@/components/SkeletonLoader";

const ContentClient = () => {
  const params = useSearchParams();
  const projectSlug = params.get("project_name");

  const [selectedProject, setProject] = useState(null);
  const [projectsState, setProjects] = useState(allWorkItems);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const project = allWorkItems.find((item) => {
      return item.slug === projectSlug;
    });
    const finalProject = project ? project : allWorkItems[0];
    setProject(finalProject);
    if (projectSlug) {
      // look for the slug and place it first
      setProjects([finalProject, ...allWorkItems.filter((item, index) => item.slug !== projectSlug)]);
    } else {
      // setProjects(externalProjects);
    }
    setIsLoaded(true);
    return () => {};
  }, []);

  if (!selectedProject) return <PortfolioSkeleton />;
  return (
    <>
      <section className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[47%] xl:justify-between">
        <div className="flex h-[50%] flex-col gap-[30px]">
          {/* project title */}
          <h1
            aria-label="Work Project Name"
            className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent"
          >
            {isLoaded && selectedProject.title}
          </h1>

          {/* project description */}
          <p className="leading-[1.9] text-white/60">{selectedProject.description}</p>

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
          <p className="text-sm text-white/70">Time: {selectedProject.projectTime}</p>
          {/* border */}
          <div className="border border-white/20"></div>
          {/* buttons */}
          <ButtonsClient project={selectedProject} />

          {selectedProject.moreImages && (
            <details className="z-20 rounded p-2 shadow-lg">
              <summary className="text-md cursor-pointer text-white/50">More images</summary>
              {selectedProject.moreImages.map((image, index) => {
                return (
                  <p className="mt-2" key={index + image.url}>
                    <a target="_blank" className="text-sm underline" href={image.url}>
                      {image.label}
                      <IoMdOpen className="ml-2 inline-block text-white/80" />
                    </a>
                  </p>
                );
              })}
            </details>
          )}
        </div>
      </section>
      <section className="w-full xl:w-[49%]">
        <SwipperClient isLoaded={isLoaded} projects={projectsState} setProject={setProject} />
      </section>
    </>
  );
};

export default ContentClient;
