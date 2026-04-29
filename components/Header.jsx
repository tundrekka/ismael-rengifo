"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import LanguageToggle from "@/components/LanguageToggle";
import { useT } from "@/lib/i18n/LanguageProvider";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={`pointer-events-none absolute inset-0 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md" : ""
        }`}
        style={{
          background: scrolled
            ? "linear-gradient(180deg, rgba(10,10,12,0.85) 0%, rgba(10,10,12,0.4) 80%, transparent 100%)"
            : "transparent",
          maskImage: "linear-gradient(180deg, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(180deg, black 60%, transparent 100%)",
        }}
      />
      <div className="container relative mx-auto flex items-center justify-between py-6 xl:py-7">
        {/* logo */}
        <Link href="/" className="group relative">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/10 bg-surface">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary/20" />
              <span className="absolute inset-0 flex items-center justify-center font-display text-xl italic text-ink">
                i
              </span>
            </div>
            <div className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-2xl italic leading-none tracking-tight text-ink">
                Ismael<span className="text-accent">.</span>
              </span>
              <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.28em] text-ink-dim">
                {t("header.tagline")}
              </span>
            </div>
          </div>
        </Link>

        {/* desktop nav */}
        <div className="hidden items-center gap-4 xl:flex">
          <Nav />
          <LanguageToggle />
        </div>

        {/* mobile nav */}
        <div className="flex items-center gap-3 xl:hidden">
          <LanguageToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
