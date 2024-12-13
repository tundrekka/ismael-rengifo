"use client";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { navLinks } from "@/app/constants";
import Link from "next/link";
import DownloadCV from "./DownloadCV";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mb-40 mt-32 text-center text-2xl">
          <SheetClose asChild>
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Ismael<span className="text-accent">.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>
        {/* nav */}
        <nav className="flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => {
            return (
              <SheetClose key={index} asChild>
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathname && "border-b-2 border-accent text-accent"
                  } text-xl capitalize transition-all hover:text-accent`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
          <DownloadCV />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
