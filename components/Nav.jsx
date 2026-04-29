"use client";
import { navLinks } from "@/app/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useT } from "@/lib/i18n/LanguageProvider";

const Nav = () => {
  const pathname = usePathname();
  const { t } = useT();
  return (
    <nav className="flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] p-1 backdrop-blur-md">
      {navLinks.map((link, index) => {
        const active = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            className={`group relative rounded-full px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.16em] transition-all duration-300 ${
              active ? "text-ink" : "text-ink-muted hover:text-ink"
            }`}
          >
            {active && (
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.05]"
              />
            )}
            <span className="relative">{t(`nav.${link.name}`)}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
