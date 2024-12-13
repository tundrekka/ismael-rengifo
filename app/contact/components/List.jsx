"use client";
import { PERSONAL_INFO } from "@/app/constants";
import React, { useEffect, useState } from "react";
import { FaCopy, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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
          <li key={index} style={{alignSelf: "start"}} className="flex items-center gap-4 md:gap-6">
            <div className="w-[42px] h-[42px] xl:w-[60px] xl:h-[60px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
              <div className="text-[22px] flex md:text-[28px]">
                <button
                aria-label={item.title}
                  onClick={item.title === "Email" ? () => handleCopy(item.description) : undefined}
                  className="text-white/70 hover:text-accent"
                >
                  {item.icon}
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <p className="text-white/60">{item.title}</p>
              <h3 className="text-md md:text-xl">{item.description}</h3>
            {(copied && item.title === "Email") && <div className="text-green-500 text-xs lg:text-sm absolute top-[6px] right-0">Copied to clipboard!</div>}
            </div>
          </li>
        );
      })}
    </>
  );
};

export default List;
