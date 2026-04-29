"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import DownloadCV from "@/components/DownloadCV";
import GoogleLetters from "@/components/GoogleLetters";
import { PERSONAL_INFO } from "@/app/constants";
import { useT } from "@/lib/i18n/LanguageProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  const { t } = useT();
  return (
    <section className="relative pb-16 pt-4 xl:pb-24 xl:pt-10">
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[80vh] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative grid grid-cols-1 items-center gap-12 xl:grid-cols-12 xl:gap-8">
        {/* left: text */}
        <div className="order-2 xl:order-1 xl:col-span-7">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="mb-8 flex flex-wrap items-center justify-center gap-3 xl:justify-start"
          >
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
              {t("hero.pillAvailable")}
            </span>
            <span className="pill">
              <Sparkles size={11} className="text-ink-dim" />
              {t("hero.pillTopRated")}
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
            className="text-center xl:text-left"
          >
            <span className="block text-[44px] font-medium leading-[0.98] tracking-tighter text-ink xl:text-[80px]">
              {t("hero.head1")}
            </span>
            <span className="mt-1 block text-[44px] leading-[0.98] tracking-tighter xl:text-[80px]">
              <span className="font-display italic text-accent">{t("hero.head2a")}</span>
              <span className="text-ink">{t("hero.head2b")}</span>
            </span>
            <span className="mt-1 block text-[44px] font-medium leading-[0.98] tracking-tighter text-ink xl:text-[80px]">
              {t("hero.head3a")}
              <span className="font-display italic text-ink">{t("hero.head3b")}</span>
            </span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[12px] uppercase tracking-[0.18em] text-ink-dim xl:justify-start"
          >
            <span className="text-ink">{PERSONAL_INFO.fullName}</span>
            <span className="h-px w-6 bg-ink-faint" />
            <span>{t("hero.metaRole")}</span>
            <span className="h-px w-6 bg-ink-faint" />
            <span>{t("hero.metaEst")}</span>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
            className="mx-auto mt-8 max-w-[560px] text-[15px] leading-relaxed text-ink-muted xl:mx-0 xl:text-[16px]"
          >
            {t("hero.description.prefix")}
            <span className="text-ink">{t("hero.description.ai")}</span>
            {t("hero.description.middle")}
            <span className="text-ink">{t("hero.description.ux")}</span>
            {t("hero.description.and")}
            <span className="text-ink">{t("hero.description.sec")}</span>
            {t("hero.description.bakedIn")}
            <span className="rounded-md bg-surface-raised px-1.5 py-0.5 text-base font-bold">
              <GoogleLetters />
            </span>
            {t("hero.description.meta")}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={4}
            className="mt-10 flex flex-col items-center gap-6 xl:flex-row xl:items-center xl:gap-5"
          >
            <DownloadCV size="lg" />
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-ink"
            >
              <span className="link-underline">{t("hero.viewWork")}</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={5}
            className="mt-10 flex flex-col items-center gap-4 xl:flex-row xl:items-center xl:gap-6"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-dim">
              {t("hero.elsewhere")}
            </span>
            <Social
              containerStyles="flex gap-3"
              iconStyles="group w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex justify-center items-center text-ink-muted text-base transition-all duration-500 hover:border-accent/40 hover:bg-accent/10 hover:text-accent hover:-translate-y-0.5"
            />
          </motion.div>
        </div>

        {/* right: photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] } }}
          className="order-1 xl:order-2 xl:col-span-5"
        >
          <div className="relative">
            <Photo />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 1.3, duration: 0.6 } }}
              className="absolute -right-2 bottom-16 hidden rounded-xl border border-white/10 bg-surface/90 px-3 py-2 backdrop-blur-md sm:block xl:-right-4"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">Stack</div>
              <div className="mt-1 flex items-center gap-2 font-mono text-[11px] text-ink">
                <span>React</span>
                <span className="text-ink-faint">·</span>
                <span>Next</span>
                <span className="text-ink-faint">·</span>
                <span className="text-accent">TS</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
