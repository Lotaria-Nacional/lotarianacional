import { twMerge } from "tailwind-merge"
import { NavLink } from "react-router-dom"
import { AnchorHTMLAttributes } from "react"

type Props = {
  link: string
  className?: string
  variant?: "red" | "default"
  children: React.ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

const LinkButton = ({
  link,
  children,
  className,
  variant = "default",
  ...rest
}: Props) => {
  return (
    <NavLink
      to={link}
      {...rest}
      reloadDocument
      className={twMerge(
        `flex items-center rounded-[8px] px-4 gap-[8px] justify-center text-base h-fit w-fit ${
          variant === "default"
            ? "bg-LT_WHITE text-LT_RED-300 border-LT_RED-300 border"
            : "bg-LT_RED-300 text-white"
        }`,
        className
      )}
    >
      {children}
    </NavLink>
  )
}

export default LinkButton
