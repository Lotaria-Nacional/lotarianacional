import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";

import "swiper/swiper-bundle.css";

export default function TestePage() {
  const [isOver, setIsOver] = useState(false);
  const [_playVideo, setPlayVideo] = useState(false);
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  const handleCanPlayVideo = () => {
    setCanPlayVideo(true);
    setPlayVideo(true);
  };

  const handlePauseVideo = () => {
    setCanPlayVideo(false);
  };

  const handleMouseOver = () => {
    setIsOver(true);
  };

  const handleMouseLeave = () => {
    setIsOver(false);
    handlePauseVideo();
  };

  return (
    <div className="h-[calc(100vh-200px)] w-full">
      <Swiper className="relative w-full  h-full">
        <SwiperSlide
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-full select-none"
        >
          <video
            className={`${
              canPlayVideo ? "block" : "hidden"
            } w-full h-full object-cover`}
            loop
            muted
            autoPlay
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          <img
            alt="banner - 01"
            src="/banner/banner-001.webp"
            className={`${
              canPlayVideo ? "hidden" : "block"
            } absolute inset-0 w-full h-full object-cover`}
          />

          <div
            className={`${
              isOver ? "block" : "hidden"
            } absolute w-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100]`}
          >
            <FaStopCircle
              size={80}
              onClick={handlePauseVideo}
              className={`${
                canPlayVideo ? "block" : "hidden"
              } text-white/50 cursor-pointer`}
            />

            <FaPlayCircle
              size={80}
              onClick={handleCanPlayVideo}
              className={`${
                canPlayVideo ? "hidden" : "block"
              } text-white/50 cursor-pointer`}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className="w-full h-full select-none"
        >
          <img
            alt="banner - 02"
            src="/banner/banner-002.webp"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
