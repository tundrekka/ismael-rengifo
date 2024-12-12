"use client";

import { navLinks } from "@/app/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {navLinks.map((link, index) => {
        if (link.path === pathname) {
          return (
            <span
              key={index}
              className={` text-accent border-b-2 border-accent capitalize font-medium hover:text-accent transition-all`}
            >
              {link.name}
            </span>
          );
        }
        return (
          <Link
            href={link.path}
            key={index}
            className={"capitalize font-medium hover:text-accent transition-all"}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
