import BannerTabs from "@/features/banners/components/banner-tabs";

export default function BannerPage() {
  return (
    <div className="main w-full flex lg:flex-row flex-col h-full items-center lg:gap-6 gap-4">
      <section className="bg-white w-full rounded-card p-4 h-fit flex flex-col gap-2 flex-1">
        <span className="px-4 py-2 bg-LT-GRAY-100/30 rounded-md w-fit">
          Desktop
        </span>
        <BannerTabs />
      </section>

      <section className="bg-white w-full rounded-card p-4 h-fit flex flex-col gap-2 flex-1">
        <span className="px-4 py-2 bg-LT-GRAY-100/30 rounded-md w-fit">
          Mobile
        </span>
        <BannerTabs />
      </section>
    </div>
  );
}
