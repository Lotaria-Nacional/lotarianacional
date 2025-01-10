import { useAddBanner } from "@/hooks/useAddBanner"
import { useBanners } from "@/hooks/useBanners"
import { AddBannerType } from "./desktop-banner"
import { toast } from "react-toastify"
import { Accordion } from "../ui/accordion"
import BannerAccordion from "./banner-accordion"

const MobileBanner = () => {
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
        name="mob_1"
        save={handleSave}
        isLoading={isAddingBanner}
        bannerImg={banner?.mob_banner_1}
      />
      <BannerAccordion
        value="2"
        name="mob_2"
        save={handleSave}
        isLoading={isAddingBanner}
        bannerImg={banner?.mob_banner_2}
      />
      <BannerAccordion
        value="3"
        name="mob_3"
        save={handleSave}
        isLoading={isAddingBanner}
        bannerImg={banner?.mob_banner_3}
      />
    </Accordion>
  )
}

export default MobileBanner
