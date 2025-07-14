import { useEffect, useState } from "react"

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("body-overflow-hidden")
    } else {
      document.body.classList.remove("body-overflow-hidden")
    }
  }, [isModalOpen])

  return { isModalOpen, setIsModalOpen, closeModal, openModal }
}
