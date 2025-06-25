import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { useAgencies } from "../hooks/useAgencies";
import { Swiper, SwiperSlide } from "swiper/react";
import AgencyCard from "../components/agency-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AgencySkeleton from "../components/agency-skeleton";
import PageTitle from "@/shared/components/common/page-title";
import GoogleMap from "@/features/map/components/google-map";
import EmptyState from "@/shared/components/common/empty-state";
import Container from "@/shared/components/common/container/container";
import GoogleMapMobile from "@/features/map/components/google-map-mobile";

const AgenciasPage = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { agencies, isLoading } = useAgencies();

  const handleSwiper = (direction: "left" | "right") => {
    if (swiperRef.current) {
      if (direction === "left") {
        swiperRef.current.slidePrev();
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  const BUTTON_STYLE =
    "border border-zinc-300 bg-white size-8 p-2 text-zinc-500 rounded-full cursor-pointer hover:bg-zinc-100 transition-all duration-200 ease-in-out";

  return (
    <>
      <Container className="lg:py-[40px] hidden lg:flex flex-col gap-4">
        <section className="w-full flex items-center justify-between lg:px-0 px-5">
          <PageTitle>Agências</PageTitle>
          <div className="flex items-center bg-zinc-200 rounded-full p-1 gap-4">
            <ChevronLeft
              className={BUTTON_STYLE}
              onClick={() => handleSwiper("left")}
            />
            <ChevronRight
              className={BUTTON_STYLE}
              onClick={() => handleSwiper("right")}
            />
          </div>
        </section>

        {isLoading ? (
          <AgencySkeleton />
        ) : agencies && Array.isArray(agencies) && agencies.length > 0 ? (
          <Swiper
            spaceBetween={4}
            className="w-full"
            slidesPerView={3.5}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {agencies.map((agency, i) => (
              <SwiperSlide key={i}>
                <AgencyCard agency={agency} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <EmptyState message="Não há nenhuma agência ainda." />
        )}
      </Container>

      <GoogleMap />
      <GoogleMapMobile />
    </>
  );
};

export default AgenciasPage;
