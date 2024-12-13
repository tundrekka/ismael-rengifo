import { FiEye } from "react-icons/fi";
import { PERSONAL_INFO } from "@/app/constants";
import Social from "@/components/Social";
import ContactForm from "./components/ContactForm";
import List from "./components/List";
import DownloadCV from "@/components/DownloadCV";

export const metadata = {
  title: "Ismael Rengifo | Contact",
  description: "My portfolio Works",
};

const Contact = () => {
  return (
    <div className="container mx-auto px-0 py-6">
      <div className="flex flex-col gap-[30px] xl:flex-row xl:items-start">
        {/* form */}
        <section className="order-2 xl:order-none xl:w-[54%]">
          <ContactForm />
        </section>

        {/* info */}
        <section className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
          <ul className="relative flex w-full flex-col items-center gap-10">
            <List />
            <Social
              containerStyles="flex gap-6"
              iconStyles="w-11 h-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            />
            <li>
              <DownloadCV variant={"default"} size="lg" />
            </li>
            <li>
              <a
                href={PERSONAL_INFO.curriculumsLinks.spanish}
                aria-label="See Spanish Curriculum Vitae"
                className="flex cursor-pointer items-center gap-2 text-xs text-white/70 hover:text-white"
              >
                Spanish CV
                <FiEye />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Contact;
