import DesktopBanner from "@/components/banner/desktop-banner"
import MobileBanner from "@/components/banner/mobile-banner"

const BannersPage = () => {
  return (
    <main className="w-full flex items-center justify-center">
      <div className="w-[calc(552px*2)] flex h-[593px] items-center gap-4">
        <div className=" bg-white p-4 rounded-[20px] h-full w-full flex flex-col gap-2">
          <span className="px-5 h-[30px] flex items-center justify-center rounded-[10px] bg-GRAY-100 w-fit">
            Desktop
          </span>
          <DesktopBanner />
        </div>
        <div className=" bg-white p-4 rounded-[20px] h-full w-full flex flex-col gap-2">
          <span className="px-5 h-[30px] flex items-center justify-center rounded-[10px] bg-GRAY-100 w-fit">
            Mobile
          </span>

          <MobileBanner />
        </div>
      </div>
    </main>
  )
}

export default BannersPage
