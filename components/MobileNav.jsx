"use client";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { navLinks } from "@/app/constants";
import Link from "next/link";
import DownloadCV from "@/components/DownloadCV";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md transition-colors hover:border-accent/40">
        <CiMenuFries className="text-[20px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col border-l border-white/10 bg-primary/95 backdrop-blur-xl">
        {/* logo */}
        <div className="mb-24 mt-20 text-center">
          <SheetClose asChild>
            <Link href="/">
              <h1 className="font-display text-5xl italic tracking-tight">
                Ismael<span className="text-accent">.</span>
              </h1>
              <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-ink-dim">
                Software Dev
              </span>
            </Link>
          </SheetClose>
        </div>
        {/* nav */}
        <nav className="flex flex-col items-center justify-center gap-6">
          {navLinks.map((link, index) => {
            const active = link.path === pathname;
            return (
              <SheetClose key={index} asChild>
                <Link
                  href={link.path}
                  className={`relative font-display text-3xl italic capitalize transition-all ${
                    active ? "text-accent" : "text-ink hover:text-accent"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute -left-6 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_rgba(0,255,153,0.6)]" />
                  )}
                </Link>
              </SheetClose>
            );
          })}
          <div className="mt-8">
            <DownloadCV />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
