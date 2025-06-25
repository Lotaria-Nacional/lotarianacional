import { useEffect, useState } from "react"

function usePopUp() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)

  const handleOpenPopUp = () => setIsPopUpOpen(true)
  const handleClosePopUp = () => setIsPopUpOpen(false)

  useEffect(() => {
    if (isPopUpOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isPopUpOpen])

  return { handleClosePopUp, handleOpenPopUp, isPopUpOpen }
}

export default usePopUp
