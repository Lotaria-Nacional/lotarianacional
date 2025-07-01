import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AgencyCard from "../components/agency-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useFetchManyAgencies } from "../hooks/use-fetch-many-agencies";
import AgencySkeleton from "../components/agency-skeleton";
import GoogleMap from "@/features/map/components/google-map";
import EmptyState from "@/shared/components/common/empty-state";
import GoogleMapMobile from "@/features/map/components/google-map-mobile";
import { PageBody } from "@/shared/components/layout/page-body";
import { PageHeader } from "@/shared/components/layout/page-header";

export default function AgencyPage() {
  const swiperRef = useRef<SwiperType | null>(null);
  const { data: agencies, isLoading } = useFetchManyAgencies();

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
      <PageBody.Container>
        <PageHeader.Container>
          <PageHeader.Title>Agências</PageHeader.Title>

          <PageHeader.Actions>
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
          </PageHeader.Actions>
        </PageHeader.Container>

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
      </PageBody.Container>

      <GoogleMap />
      <GoogleMapMobile />
    </>
  );
}
