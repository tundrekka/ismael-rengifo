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
      <section className="order-2 flex w-full flex-col xl:order-none xl:h-[480px] xl:w-[47%] xl:justify-between">
        <div className="flex flex-col gap-6">
          {/* eyebrow */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-dim">
              [ {selectedProject.num || "00"} ]
            </span>
            <span className="h-px w-10 bg-ink-faint" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-dim">
              {selectedProject.category || "frontend"}
            </span>
          </div>

          {/* project title */}
          <h1
            aria-label="Work Project Name"
            className="font-display text-5xl italic capitalize leading-[0.95] tracking-tight text-ink transition-all duration-500 group-hover:text-accent xl:text-7xl"
          >
            {isLoaded && selectedProject.title}
          </h1>

          {/* project description */}
          <p style={{ whiteSpace: "pre-line" }} className="text-[15px] leading-[1.85] text-ink-muted">
            {selectedProject.description}
          </p>

          {/* stack */}
          <ul className="flex flex-wrap gap-2">
            {selectedProject.stack.map((item, index) => (
              <li
                key={index}
                className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted"
              >
                {item.name}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
            <span className="h-1 w-1 rounded-full bg-ink-faint" />
            {selectedProject.projectTime}
          </div>

          {/* divider */}
          <div className="h-px w-full bg-white/[0.08]" />

          {/* buttons */}
          <ButtonsClient project={selectedProject} />

          {selectedProject.moreImages && (
            <details className="z-20 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
              <summary className="cursor-pointer font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim hover:text-ink">
                More images
              </summary>
              {selectedProject.moreImages.map((image, index) => (
                <p className="mt-2" key={index + image.url}>
                  <a target="_blank" className="text-sm text-ink-muted underline underline-offset-4 hover:text-accent" href={image.url}>
                    {image.label}
                    <IoMdOpen className="ml-2 inline-block" />
                  </a>
                </p>
              ))}
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
