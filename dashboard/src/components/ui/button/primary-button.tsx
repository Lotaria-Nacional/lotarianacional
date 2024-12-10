import { twMerge } from "tailwind-merge"
import { ButtonHTMLAttributes } from "react"

export type BtnType = "default" | "yellow" | "danger" | "ghost"
type Props = {
  className?: string
  children: React.ReactNode
  btnType?: BtnType
} & ButtonHTMLAttributes<HTMLButtonElement>
const PrimaryButton = ({
  className,
  children,
  btnType = "default",
  ...rest
}: Props) => {
  const buttonTypeStyle =
    btnType === "default"
      ? "bg-white text-RED-200"
      : btnType === "ghost"
      ? "bg-GRAY-300 text-white"
      : btnType === "danger"
      ? "bg-RED-200 text-white"
      : "bg-YELLOW text-white"
  return (
    <button
      {...rest}
      className={twMerge(
        `${buttonTypeStyle} flex items-center justify-center gap-1 text-[15px] rounded-[6px] p-[10px] font-medium`,
        className
      )}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
