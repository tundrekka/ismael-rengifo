"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import { useLayoutEffect } from "react";

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
    <div className="w-full h-full relative">
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
          // className="w-[298px] h-[298px] xl:w-[450px] xl:h-[450px] mix-blend-lighten absolute"
          className="w-[298px] h-[298px] xl:w-[424px] xl:h-[424px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/ismel-removebg-500x500.png"
            priority
            quality={100}
            fill
            alt="Face photo of ismael rengifo"
            className="object-contain rounded-full brightness-75 hover:brightness-90 drop-shadow-[0px_4px_6px_#00FF9950]"
            // style={{filter: "drop-shadow(2px 4px 6px #00FF9950)"}}
          />
          <div
            id="arrow-down"
            className="hidden xl:flex text-white/20 animate-pulse absolute bottom-0 right-0"
          >
            <FaArrowDown className="cursor-pointer" onClick={scrollTo} />
          </div>
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] h-[300px] xl:w-[428px] xl:h-[428px]"
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
