"use client";
import WorksWrapper from "./components/WorksWrapper";
import { useT } from "@/lib/i18n/LanguageProvider";

const Work = () => {
  const { t } = useT();
  return (
    <div className="flex min-h-[80vh] flex-col justify-start py-10 xl:py-12 xl:px-0">
      <div className="mb-10 xl:mb-14">
        <div className="section-eyebrow">{t("work.eyebrow")}</div>
        <h1 className="font-display text-5xl italic tracking-tight text-ink xl:text-7xl">{t("work.headline")}</h1>
      </div>
      <div className="flex flex-col xl:flex-row xl:gap-12">
        <WorksWrapper />
      </div>
    </div>
  );
};

export default Work;
