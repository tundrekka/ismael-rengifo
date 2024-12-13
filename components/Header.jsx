import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-7 text-white xl:py-11">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link href="/">
          <h2 className="text-4xl font-semibold">
            Ismael<span className="text-accent">.</span>
          </h2>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          {/* <Link href="/contact">
            <HireMeBtn />
          </Link> */}
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
