import { toast } from "react-toastify"
import { DeviceType } from "@/interfaces"
import { Accordion } from "../ui/accordion"
import { useBanners } from "@/hooks/useBanners"
import BannerAccordion from "./banner-accordion"
import { useAddBanner } from "@/hooks/useAddBanner"

export type AddBannerType = {
  device: DeviceType
  image: File
}

const DesktopBanner = () => {
  const { banners, isLoading: isLoadingBanner } = useBanners()
  const { handleAddBanner, isLoading: isAddingBanner } = useAddBanner()

  const deskTopBanners = banners.filter((banner) => banner.device === "desktop")

  const handleSave = async (data: AddBannerType) => {
    try {
      const formData = new FormData()
      formData.append("banner", data.image)
      formData.append("device", data.device)
      const result = await handleAddBanner(formData)
      toast.success(result.message)
      window.location.reload()
    } catch (error: any) {
      toast.error(error)
    }
  }

  if (isLoadingBanner) return <span>Carregando...</span>

  return (
    <Accordion type="single">
      <BannerAccordion
        value="1"
        device="desktop"
        save={handleSave}
        banner={deskTopBanners[0]}
        isLoading={isAddingBanner}
      />
      <BannerAccordion
        value="2"
        device="desktop"
        save={handleSave}
        banner={deskTopBanners[1]}
        isLoading={isAddingBanner}
      />
      <BannerAccordion
        value="3"
        device="desktop"
        save={handleSave}
        banner={deskTopBanners[2]}
        isLoading={isAddingBanner}
      />
    </Accordion>
  )
}

export default DesktopBanner
