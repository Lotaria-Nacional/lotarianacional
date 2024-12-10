import { twMerge } from "tailwind-merge"
import { NavLink } from "react-router-dom"
import { AnchorHTMLAttributes } from "react"

export type BtnType = "default" | "yellow" | "danger" | "ghost"
type Props = {
  link: string
  btnType?: BtnType
  className?: string
  children: React.ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>
const LinkButton = ({
  link,
  children,
  className,
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
    <NavLink
      to={link}
      {...rest}
      className={twMerge(
        `${buttonTypeStyle} flex items-center justify-center gap-1 text-[15px] rounded-[6px] p-[10px] font-medium`,
        className
      )}
    >
      {children}
    </NavLink>
  )
}

export default LinkButton
