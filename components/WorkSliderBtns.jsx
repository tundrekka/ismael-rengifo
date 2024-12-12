"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { cn } from "@/lib/utils";

const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
  iconsStyles,
  length,
}) => {
  const swiper = useSwiper();
  const currentIndex = swiper.activeIndex;
  if (!swiper || swiper.destroyed) return <div></div>;

  return (
    <div className={containerStyles}>
      {length && (
        <p className="basis-full xl:basis-auto text-sm text-white/60 flex items-end xl:mr-3">
          {currentIndex + 1} / {length}
        </p>
      )}
      <button
        aria-label="Go to prev work"
        disabled={currentIndex === 0}
        style={currentIndex === 0 ? { background: "gray" } : {}}
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        aria-label="Go to next work"
        disabled={currentIndex === 5}
        style={currentIndex === 5 ? { background: "gray" } : {}}
        className={btnStyles}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
