"use client";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { useLayoutEffect } from "react";
import Image from "next/image";

const Photo = () => {
  // function to scroll to the end of the page with smooth behavior
  const scrollTo = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  // hide arrow down if screen height is greater than 700px
  useLayoutEffect(() => {
    if (window.innerHeight > 700) {
      const arrow = document.getElementById("arrow-down");
      if (!arrow) return;
      arrow.style.display = "none";
    }

    return () => {};
  }, []);

  return (
    <div className="relative h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0, duration: 0.2, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.6, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute h-[298px] w-[298px] mix-blend-lighten xl:h-[424px] xl:w-[424px]"
        >
          <Image
            src="/assets/ismel-removebg-500x500.png"
            priority
            quality={100}
            fill
            alt="Face photo of ismael rengifo"
            className="rounded-full object-contain brightness-75 drop-shadow-[0px_4px_6px_#00FF9950] hover:brightness-90"
          />
          <div id="arrow-down" className="absolute bottom-0 right-0 hidden animate-pulse text-white/30 xl:flex">
            <FaArrowDown className="cursor-pointer" onClick={scrollTo} />
          </div>
        </motion.div>

        {/* circle */}
        <motion.svg
          className="h-[300px] w-[300px] xl:h-[428px] xl:w-[428px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
