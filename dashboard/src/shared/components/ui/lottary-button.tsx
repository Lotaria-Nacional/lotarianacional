import React from "react"
import { twMerge } from "tailwind-merge"

type ButtonVariants = "red" | "yellow" | "gray" | "grayDarker" | "ghost"

type Props = {
  className?: string
  variant?: ButtonVariants
} & React.PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  className,
  variant = "red",
  children,
  ...props
}: Props) {
  const btnStyle = {
    red: "bg-LT-RED-200",
    yellow: "bg-LT-YELLOW",
    gray: "bg-LT-GRAY-200",
    grayDarker: "bg-LT-GRAY-300 text-black",
    ghost: "bg-white-200 !text-black-200 shadow-ghost-button",
  }
  return (
    <button
      {...props}
      className={twMerge(
        `${btnStyle[variant]} disabled:opacity-70 w-fit hover:opacity-70 duration-200 ease-in transition-all cursor-pointer max-h-[38px] rounded-[4px] text-center p-button flex items-center justify-center gap-2 text-white`,
        className
      )}
    >
      {children}
    </button>
  )
}
