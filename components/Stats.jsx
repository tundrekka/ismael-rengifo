"use client";
import { PERSONAL_INFO } from "@/app/constants";
import CountUp from "react-countup";

const stats = [
  {
    // current year - 2021
    num: PERSONAL_INFO.experienceYearsNumber,
    text: "Years of experience",
  },
  {
    num: PERSONAL_INFO.stats.projects,
    text: "Projects completed",
  },
  {
    num: PERSONAL_INFO.stats.technologies,
    text: "Technologies mastered",
  },
  {
    num: PERSONAL_INFO.stats.workHours,
    text: "Work hours",
  },
];

const Stats = () => {
  return (
    <section className="pb-12 pt-4 xl:pb-4 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div className="flex flex-1 items-center justify-center gap-4 xl:justify-start" key={index}>
                <CountUp end={item.num} duration={3} delay={1} className="text-4xl font-extrabold xl:text-6xl" />
                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
