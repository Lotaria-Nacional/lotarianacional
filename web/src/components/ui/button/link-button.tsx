import { twMerge } from "tailwind-merge"
import { NavLink } from "react-router-dom"
import { AnchorHTMLAttributes } from "react"

type Props = {
  link: string
  className?: string
  btn?: "red" | "default"
  children: React.ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

const LinkButton = ({
  link,
  children,
  className,
  btn = "default",
  ...rest
}: Props) => {
  return (
    <NavLink
      to={link}
      {...rest}
      reloadDocument
      className={twMerge(
        `px-5 py-4 flex items-center gap-2 h-[49px] lg:w-fit w-full border font-medium rounded-lg text-base ${
          btn === "default"
            ? "bg-LT_WHITE text-LT_RED-100 border-LT_RED-100"
            : "bg-LT_RED-100 text-white"
        }`,
        className
      )}
    >
      {children}
    </NavLink>
  )
}

export default LinkButton
