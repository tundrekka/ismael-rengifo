"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const featured = [
  {
    num: "01",
    title: "Roley.ai",
    slug: "roley",
    role: "Software Developer",
    year: "2025 — Now",
    image: "/assets/work/roley-1.png",
    tags: ["Next.js", "LiveKit", "Claude"],
  },
  {
    num: "02",
    title: "WobJay",
    slug: "wobjay",
    role: "Front-End Lead",
    year: "2021 — 2024",
    image: "/assets/work/wobjay-cover-thumb.png",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    num: "03",
    title: "StyleGuide Builder",
    slug: "styleguide-builder",
    role: "Pixel-Perfect Dev",
    year: "2024",
    image: "/assets/work/styleguide-figma-frame-thumb.jpg",
    tags: ["React", "Figma", "CSS"],
  },
];

const SelectedWork = () => {
  return (
    <section className="relative pb-24 pt-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <div className="section-eyebrow">Selected work</div>
          <h2 className="font-display text-4xl italic tracking-tight text-ink xl:text-6xl">
            Recent projects.
          </h2>
        </div>
        <Link
          href="/work"
          className="group hidden items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-ink sm:inline-flex"
        >
          <span className="link-underline">all work</span>
          <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {featured.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={`/work?project_name=${p.slug}`} className="group block">
              <div className="card-surface overflow-hidden">
                {/* image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-surface-raised">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
                  <div className="absolute left-4 top-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/80">
                      [ {p.num} ]
                    </span>
                  </div>
                  <div className="absolute right-4 top-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-primary/40 backdrop-blur-md transition-all duration-500 group-hover:border-accent/60 group-hover:bg-accent group-hover:text-primary">
                      <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
                {/* meta */}
                <div className="p-5">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim">
                    <span>{p.role}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl italic tracking-tight text-ink transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <Link
        href="/work"
        className="mt-8 flex items-center justify-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-ink sm:hidden"
      >
        <span className="link-underline">all work</span>
        <ArrowUpRight size={14} />
      </Link>
    </section>
  );
};

export default SelectedWork;
