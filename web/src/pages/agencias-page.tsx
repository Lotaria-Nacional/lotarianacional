import GMap from "@/components/google-map/google-map";
import Container from "../components/common/container";
import EmptyState from "../components/common/empty-state";
import AgencyCard from "../components/agencia/agency-card";
import { useAgencies } from "../hooks/api/query/useAgencies";
import AgencySkeleton from "@/components/agencia/agency-skeleton";
import GMapMobile from "@/components/google-map/google-map-mobile";
import { Swiper, SwiperSlide } from "swiper/react";
import PageTitle from "@/components/page-title";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";

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

      <GMap />
      <GMapMobile />
    </>
  );
};

export default AgenciasPage;
