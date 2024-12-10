import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { IoMdClose } from "react-icons/io"
import { BtnType } from "./button/primary-button"
import { AnimatePresence, motion } from "framer-motion"

type Props = {
  btnType?: BtnType
  className?: string
  trigger: React.ReactNode
  children: React.ReactNode
}

const ModalContainer = ({ trigger, children, className }: Props) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  return (
    <AnimatePresence mode="wait">
      {openModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
          className="fixed inset-0 w-full h-full bg-black/70 flex items-center justify-center z-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={twMerge(
              "bg-white rounded-lg p-4 z-30 w-2/6 flex gap-2 flex-col",
              className
            )}
          >
            <button onClick={handleCloseModal} className="self-end text-xl">
              <IoMdClose />
            </button>
            {children}
          </div>
        </motion.div>
      )}
      <div onClick={handleOpenModal}>{trigger}</div>
    </AnimatePresence>
  )
}

export default ModalContainer
