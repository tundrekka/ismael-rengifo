

import Social from "@/components/Social";
import ContactForm from "./components/ContactForm";
import List from "./components/List";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import DownloadCV from "@/components/DownloadCV";

export const metadata = {
  title: "Ismael Rengifo | Contact",
  description: "My portfolio Works",
};

const Contact = () => {
  return (
    // <motion.section
    //   initial={{ opacity: 0 }}
    //   animate={{
    //     opacity: 1,
    //     transition: { delay: 0, duration: 0.4, ease: "easeIn" },
    //   }}
    //   className="py-6"
    // >
    <div className="py-6 container mx-auto px-0">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* form */}
        <div className="xl:w-[54%] order-2 xl:order-none">
            <ContactForm />
        </div>
        {/* info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10 relative">
            <List />
            <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-11 h-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
            <li>
              <DownloadCV variant={"default"} size="lg" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
