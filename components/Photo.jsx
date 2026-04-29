"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative mx-auto h-[340px] w-[340px] xl:h-[480px] xl:w-[480px]">
      {/* outer rotating ring */}
      <motion.svg
        className="absolute inset-0 h-full w-full"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.8 } }}
      >
        <motion.circle
          cx="253"
          cy="253"
          r="248"
          stroke="#00ff99"
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.5"
          initial={{ strokeDasharray: "30 12 0 0" }}
          animate={{
            strokeDasharray: ["20 100 30 30", "10 30 100 60", "4 250 22 22"],
            rotate: [0, 360],
          }}
          transition={{ duration: 28, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.svg>

      {/* tick marks ring */}
      <motion.svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{
          opacity: { delay: 0.8, duration: 0.8 },
          rotate: { duration: 80, repeat: Infinity, ease: "linear" },
        }}
      >
        {Array.from({ length: 60 }).map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="2"
            x2="50"
            y2={i % 5 === 0 ? "5" : "3.5"}
            stroke="rgba(245,245,240,0.18)"
            strokeWidth="0.2"
            transform={`rotate(${i * 6} 50 50)`}
          />
        ))}
      </motion.svg>

      {/* radial gradient backdrop */}
      <div className="pointer-events-none absolute inset-[14%] rounded-full bg-gradient-to-br from-accent/[0.08] via-transparent to-secondary/[0.06] blur-3xl" />

      {/* photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        className="absolute inset-[5%] overflow-hidden rounded-full bg-surface"
      >
        <div className="relative h-full w-full">
          <Image
            src="/assets/ismel-2.png"
            priority
            quality={100}
            fill
            sizes="(max-width: 1200px) 340px, 480px"
            alt="Ismael Rengifo"
            style={{ objectPosition: "50% 18%" }}
            className="scale-[1.1] object-cover grayscale brightness-95 contrast-110"
          />
          {/* subtle inner vignette to blend edges into the circle */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_55%,rgba(10,10,12,0.85))]" />
        </div>
      </motion.div>

      {/* corner brackets */}
      <div className="pointer-events-none absolute inset-0">
        {[
          "left-0 top-0 border-l border-t",
          "right-0 top-0 border-r border-t",
          "bottom-0 left-0 border-b border-l",
          "bottom-0 right-0 border-b border-r",
        ].map((cls, i) => (
          <span key={i} className={`absolute h-4 w-4 border-accent/40 ${cls}`} />
        ))}
      </div>
    </div>
  );
};

export default Photo;
