"use client";
import { BsArrowUpRight } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { useT } from "@/lib/i18n/LanguageProvider";

const ButtonsClient = ({ project }) => {
  const { t } = useT();
  const label = t("work.tooltip.liveProject");
  return (
    <div className="flex items-center gap-3">
      {project.live && (
        <Link target="_blank" aria-label={label} href={project.live}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger
                aria-label={label}
                className="group flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10"
              >
                <BsArrowUpRight className="text-2xl text-ink-muted transition-all group-hover:text-accent group-hover:rotate-45" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em]">{label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      )}
    </div>
  );
};

export default ButtonsClient;
