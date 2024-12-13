"use client";
import { navLinks } from "@/app/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {navLinks.map((link, index) => {
        if (link.path === pathname) {
          return (
            <span key={index} className={`border-b-2 border-accent font-medium capitalize text-accent transition-all hover:text-accent`}>
              {link.name}
            </span>
          );
        }
        return (
          <Link href={link.path} key={index} className={"font-medium capitalize transition-all hover:text-accent"}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
