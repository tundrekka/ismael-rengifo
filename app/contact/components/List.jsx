"use client";
import { PERSONAL_INFO } from "@/app/constants";
import { useEffect, useState } from "react";
import { FaCopy, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: PERSONAL_INFO.phone,
  },
  {
    icon: <FaCopy />,
    title: "Email",
    description: PERSONAL_INFO.email,
  },
  // {
  //   icon: <FaMapMarkerAlt />,
  //   title: "Address",
  //   description: "Code Corner, Tech Town 13579",
  // },
];

const List = () => {
  const [copied, setCopied] = useState(false);
  let timeoutId;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      timeoutId = setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId); // Clean up the timeout on component unmount
    };
  }, []);
  return (
    <>
      {info.map((item, index) => {
        return (
          <li key={index} style={{ alignSelf: "start" }} className="flex w-full items-center gap-4 md:gap-5">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-accent xl:h-[56px] xl:w-[56px]">
              <button
                aria-label={item.title}
                onClick={item.title === "Email" ? () => handleCopy(item.description) : undefined}
                className="flex text-[18px] text-ink-muted transition-colors hover:text-accent"
              >
                {item.icon}
              </button>
            </div>
            <div className="relative flex-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim">{item.title}</p>
              <h3 className="mt-1 text-[15px] text-ink md:text-base">{item.description}</h3>
              {copied && item.title === "Email" && (
                <div className="absolute right-0 top-0 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  Copied!
                </div>
              )}
            </div>
          </li>
        );
      })}
    </>
  );
};

export default List;
