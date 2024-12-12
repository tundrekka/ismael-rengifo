"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import "swiper/css";

const SwipperClient = ({ setProject, projects, isLoaded }) => {
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className="xl:h-[520px] mb-12"
      onSlideChange={handleSlideChange}
      onSwiper={(swiper) => handleSlideChange(swiper)}
      parallax
    >
      {isLoaded ? (
        projects.map((project, index) => {
          return (
            <SwiperSlide key={index} className="w-full">
              <div className="h-[460px] relative rounded-lg group flex flex-col justify-center items-center bg-pink-50/20">
                {/* overlay */}
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                {/* image */}
                <div className="relative w-full h-full ">
                  <Image
                    style={{ filter: "brightness(0.925)" }}
                    priority={index === 0}
                    src={project.image}
                    fill
                    className="object-cover rounded-lg"
                    alt={project.title + " website screenshot"}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })
      ) : (
        <SwiperSlide className="w-full">
          <div className="h-[460px] animate-pulse relative group flex justify-center items-center bg-pink-50/20">
            {/* overlay */}
            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
            {/* image */}
            <div className="relative w-full h-full">
              {/* <Image
              src={project.image}
              fill
              className="object-cover"
              alt=""
            /> */}
            </div>
          </div>
        </SwiperSlide>
      )}
      {/* slider buttons */}
      {isLoaded && (
        <WorkSliderBtns
          length={projects.length}
          // containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
          containerStyles="flex flex-wrap xl:flex-nowrap mt-3 xl:mt-0 gap-2 xl:absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
          btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
        />
      )}
    </Swiper>
  );
};

export default SwipperClient;
