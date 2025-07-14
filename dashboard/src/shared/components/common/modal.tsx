import { useEffect, useRef, PropsWithChildren } from "react"
import ReactDOM from "react-dom"
import { twMerge } from "tailwind-merge"

type Props = {
  isOpen: boolean
  onClose: () => void
  className?: string
} & PropsWithChildren

export default function Modal({ isOpen, onClose, children, className }: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    window.addEventListener("mousedown", handleClickOutside)
    return () => window.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, onClose])
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="fixed z-[100] flex items-center justify-center top-0 left-0 w-full h-full bg-black/70">
      <div
        ref={modalRef}
        className={twMerge(
          "max-w-[400px] lg:min-w-[400px] p-2 animate-modal-fade-in min-h-[250px] bg-white rounded-card",
          className
        )}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}
