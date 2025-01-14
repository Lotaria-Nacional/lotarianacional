import { toast } from "react-toastify"
import { Accordion } from "../ui/accordion"
import { useBanners } from "@/hooks/useBanners"
import { AddBannerType } from "./desktop-banner"
import BannerAccordion from "./banner-accordion"
import { useAddBanner } from "@/hooks/useAddBanner"

const MobileBanner = () => {
  const { banners, isLoading: isLoadingBanner } = useBanners()
  const { handleAddBanner, isLoading: isAddingBanner } = useAddBanner()

  const mobileBanners = banners?.filter((banner) => banner.device === "mobile")

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
        device="mobile"
        banner={mobileBanners[0]}
        save={handleSave}
        isLoading={isAddingBanner}
      />
      <BannerAccordion
        value="2"
        device="mobile"
        banner={mobileBanners[1]}
        save={handleSave}
        isLoading={isAddingBanner}
      />
      <BannerAccordion
        value="3"
        device="mobile"
        banner={mobileBanners[2]}
        save={handleSave}
        isLoading={isAddingBanner}
      />
    </Accordion>
  )
}

export default MobileBanner
