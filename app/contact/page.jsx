import { FiEye } from "react-icons/fi";
import { PERSONAL_INFO } from "@/app/constants";
import Social from "@/components/Social";
import DownloadCV from "@/components/DownloadCV";
import ContactForm from "./components/ContactForm";
import List from "./components/List";

export const metadata = {
  title: "Ismael Rengifo | Contact",
  description: "My portfolio Works",
};

const Contact = () => {
  return (
    <div className="container mx-auto py-10 xl:py-12">
      {/* page header */}
      <div className="mb-12">
        <div className="section-eyebrow">/ Contact</div>
        <h1 className="font-display text-5xl italic tracking-tight text-ink xl:text-7xl">
          Say hello.
        </h1>
      </div>

      <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
        {/* form */}
        <section className="order-2 xl:order-none xl:w-[58%]">
          <ContactForm />
        </section>

        {/* info */}
        <section className="order-1 mb-4 flex flex-1 items-start xl:order-none xl:mb-0 xl:justify-end">
          <div className="card-surface w-full p-6 lg:p-8">
            <div className="section-eyebrow">/ Direct lines</div>
            <ul className="flex w-full flex-col gap-6">
              <List />
            </ul>
            <div className="my-6 h-px w-full bg-white/[0.06]" />
            <div className="flex flex-col items-start gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim">Find me on</span>
              <Social
                containerStyles="flex gap-3"
                iconStyles="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] flex justify-center items-center text-ink-muted text-base hover:bg-accent hover:text-primary hover:border-accent transition-all duration-500"
              />
            </div>
            <div className="my-6 h-px w-full bg-white/[0.06]" />
            <div className="flex flex-col items-start gap-3">
              <DownloadCV />
              <a
                href={PERSONAL_INFO.curriculumsLinks.spanish}
                aria-label="See Spanish Curriculum Vitae"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim hover:text-ink"
              >
                Spanish CV
                <FiEye />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
