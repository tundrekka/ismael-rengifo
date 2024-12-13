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
          <li key={index} style={{ alignSelf: "start" }} className="flex items-center gap-4 md:gap-6">
            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:h-[60px] xl:w-[60px]">
              <div className="flex text-[22px] md:text-[28px]">
                <button
                  aria-label={item.title}
                  onClick={item.title === "Email" ? () => handleCopy(item.description) : undefined}
                  className="text-white/70 hover:text-accent"
                >
                  {item.icon}
                </button>
              </div>
            </div>
            <div className="relative flex-1">
              <p className="text-white/60">{item.title}</p>
              <h3 className="text-md md:text-xl">{item.description}</h3>
              {copied && item.title === "Email" && (
                <div className="absolute right-0 top-[6px] text-xs text-green-500 lg:text-sm">Copied to clipboard!</div>
              )}
            </div>
          </li>
        );
      })}
    </>
  );
};

export default List;
