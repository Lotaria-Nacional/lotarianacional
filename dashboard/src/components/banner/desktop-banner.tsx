import { toast } from "react-toastify"
import { Accordion } from "../ui/accordion"
import { useBanners } from "@/hooks/useBanners"
import BannerAccordion from "./banner-accordion"
import { useAddBanner } from "@/hooks/useAddBanner"

export type DeviceType =
  | "desk_1"
  | "desk_2"
  | "desk_3"
  | "mob_1"
  | "mob_2"
  | "mob_3"
export type AddBannerType = {
  device: DeviceType
  file: File
}

const DesktopBanner = () => {
  const { handleAddBanner, isLoading: isAddingBanner } = useAddBanner()
  const { banner, isLoading: isLoadingBanner } = useBanners()

  const handleSave = async (data: AddBannerType) => {
    try {
      const formData = new FormData()
      formData.append(data.device, data.file)
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
        name="desk_1"
        save={handleSave}
        isLoading={isAddingBanner}
        bannerImg={banner?.desk_banner_1}
      />
      <BannerAccordion
        value="2"
        name="desk_2"
        save={handleSave}
        isLoading={isAddingBanner}
        bannerImg={banner?.desk_banner_2}
      />
      <BannerAccordion
        value="3"
        name="desk_3"
        save={handleSave}
        isLoading={isAddingBanner}
        bannerImg={banner?.desk_banner_3}
      />
    </Accordion>
  )
}

export default DesktopBanner
