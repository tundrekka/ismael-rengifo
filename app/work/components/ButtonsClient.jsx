"use client";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const ButtonsClient = ({ project }) => {
  return (
    <>
      {/* buttons */}
      <div className="flex items-center gap-4">
        {/* live project button */}
        {project.live && (
          <Link target="_blank" aria-label="Live project" href={project.live}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger aria-label="Live project" className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                  <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                </TooltipTrigger>
                <TooltipContent>
                  <p id="live-project-text">Live project</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        )}
        {/* github project button */}
        {/*
          project.github && (
        <Link href={project.github}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                <BsGithub className="text-white text-3xl group-hover:text-accent" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Github repository</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
          )
        */}
      </div>
    </>
  );
};

export default ButtonsClient;
