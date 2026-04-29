"use client";
import { PERSONAL_INFO } from "@/app/constants";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    num: PERSONAL_INFO.experienceYearsNumber,
    suffix: "+",
    label: "Years",
    sub: "shipping production",
  },
  {
    num: PERSONAL_INFO.stats.projects,
    suffix: "",
    label: "Projects",
    sub: "delivered end-to-end",
  },
  {
    num: PERSONAL_INFO.stats.technologies,
    suffix: "",
    label: "Technologies",
    sub: "in active rotation",
  },
  {
    num: PERSONAL_INFO.stats.workHours,
    suffix: "",
    label: "Hours",
    sub: "logged on Upwork",
  },
];

const Stats = () => {
  return (
    <section className="relative pb-20 pt-12 xl:pb-24 xl:pt-16">
      <div className="section-eyebrow">By the numbers</div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="card-surface group relative overflow-hidden p-5 md:p-7"
          >
            {/* corner accent */}
            <span className="absolute right-4 top-4 font-mono text-[10px] tracking-[0.18em] text-ink-faint">
              0{index + 1}
            </span>
            {/* number */}
            <div className="flex items-baseline gap-1 font-display tracking-tighter">
              <CountUp
                end={item.num}
                duration={2.4}
                delay={0.3}
                separator=","
                className="text-5xl font-medium text-ink md:text-6xl xl:text-7xl"
                enableScrollSpy
                scrollSpyOnce
              />
              {item.suffix && (
                <span className="text-3xl text-ink-dim md:text-4xl">{item.suffix}</span>
              )}
            </div>
            {/* label */}
            <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink">
              {item.label}
            </div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">
              {item.sub}
            </div>
            {/* hover line */}
            <span className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent via-accent/50 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
