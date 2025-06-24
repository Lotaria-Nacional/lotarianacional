import { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Container from "@/components/common/container";
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";

import "swiper/swiper-bundle.css";
import { IMAGES } from "@/constants/assets";

export const TestePage = () => {
  const [isOver, setIsOver] = useState(false);
  const [canPlayVideo, setCanPlayVideo] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  const handlePauseVideo = () => {
    setCanPlayVideo(false);
  };

  const handleCanPlayVideo = () => {
    setCanPlayVideo(true);
    console.log({
      isOver,
      canPlayVideo,
    });
  };

  const handleMouseOver = () => {
    if (isMobileOrTablet) return;
    setIsOver(true);
  };

  const handleMouseLeave = () => {
    if (isMobileOrTablet) return;
    setIsOver(false);
    handlePauseVideo();
  };

  useEffect(() => {
    const checkDevice = () => setIsMobileOrTablet(window.innerWidth <= 1024);

    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  return (
    <div className="relative h-[20vh] lg:h-[calc(100vh-200px)] w-full flex items-center justify-center">
      <Container className="h-full items-start justify-end">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay
          pagination
          className="absolute w-full h-full inset-0"
        >
          <SwiperSlide className="relative w-full h-full select-none">
            <img
              alt={"banner - 01"}
              src={IMAGES.banner1}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full select-none">
            <img
              alt={"banner - 02"}
              src={IMAGES.banner2}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <HeroPlayVideo
          isOver={isOver}
          canPlayVideo={canPlayVideo}
          handleMouseOver={handleMouseOver}
          handlePauseVideo={handlePauseVideo}
          handleMouseLeave={handleMouseLeave}
          handleCanPlayVideo={handleCanPlayVideo}
        />

        <FakeCardListing hide={canPlayVideo} />
      </Container>
    </div>
  );
};

export const FakeCard = () => {
  const [isOvered, setIsOvered] = useState(false);

  const handleMouseOver = () => setIsOvered(true);
  const handleMouseLeave = () => setIsOvered(false);

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={`w-[180px] h-[115px] rounded-2xl flex flex-col gap-4 justify-between items-start py-2 px-[5px] ${
        isOvered ? "bg-white/30" : "result-card-image"
      }`}
    >
      <header className="flex px-2 flex-col text-white">
        <span>Fezada</span>
        <span>10:00</span>
      </header>
      <div className="flex items-center justify-center gap-[4px] w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="size-[32px] flex items-center justify-center text-LT_RED-200 font-bold text-center rounded-full bg-white"
          >
            {Math.floor(Math.random() * 90)}
          </span>
        ))}
      </div>
    </div>
  );
};

export const FakeCardListing = ({ hide }: { hide: boolean }) => {
  return (
    <div
      className={` ${
        hide ? "lg:hidden" : "lg:flex"
      } flex-col gap-4 py-24 z-[900000] hidden`}
    >
      <div className="flex items-center flex-col gap-2">
        <span className="text-white uppercase font-bold">
          Resultados diários
        </span>
        <span className="text-black bg-yellow-400 px-4 py-1 rounded-lg">
          15-04-2025
        </span>
      </div>
      <FakeCard />
      <FakeCard />
      <FakeCard />
      <FakeCard />
    </div>
  );
};

type HeroPlayVideoProps = {
  isOver: boolean;
  canPlayVideo: boolean;
  handleMouseOver: () => void;
  handleMouseLeave: () => void;
  handlePauseVideo: () => void;
  handleCanPlayVideo: () => void;
};

export const HeroPlayVideo: FC<HeroPlayVideoProps> = ({
  handlePauseVideo,
  handleMouseLeave,
  handleMouseOver,
  handleCanPlayVideo,
  canPlayVideo,
  isOver,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      handlePauseVideo();
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      handleCanPlayVideo();
    }
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 w-full h-full z-[4000]"
    >
      <video
        ref={videoRef}
        className={`${
          canPlayVideo ? "flex" : "hidden"
        } w-full h-full object-cover`}
        loop
        muted
        autoPlay
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <button
        className={`${
          isOver ? "lg:block" : "lg:hidden"
        } absolute w-[100px] z-[600] flex items-center justify-center right-0 bottom-3 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2`}
      >
        <FaStopCircle
          onClick={handleStop}
          className={`${
            canPlayVideo ? "block" : "hidden"
          } text-white/50 cursor-pointer text-[35px] lg:text-[80px]`}
        />

        <FaPlayCircle
          onClick={handlePlay}
          className={`${
            canPlayVideo ? "hidden" : "block"
          } text-white/50 cursor-pointer text-[35px] lg:text-[80px]`}
        />
      </button>
    </div>
  );
};
