"use client";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button"

const HireMeBtn = () => {
  const pathname = usePathname();

  return (
   <Button variant={pathname === "/contact" ? "outline": "default"}>Hire me</Button>
  )
}

export default HireMeBtn