import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react"

type ModalContextType = {
  isModalOpen: boolean
  openModal: (url: string) => void
  closeModal: () => void
  toggleModal: () => void
  videoURL: string | null
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalContextProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [videoURL, setVideoURL] = useState<string | null>(null)

  const openModal = (url: string) => {
    setVideoURL(url)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
    setVideoURL(null)
  }
  const toggleModal = () => setIsModalOpen((prev) => !prev)

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.classList.remove("overflow-hidden")
    }
  }, [isModalOpen])

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, videoURL, closeModal, toggleModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("useModal deve ser usado dentro de um ModalContextProvider")
  }
  return context
}
