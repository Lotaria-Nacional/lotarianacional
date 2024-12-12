import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
  btn?: "red" | "default"
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const DefaultButton = ({
  children,
  className,
  btn = "default",
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={twMerge(
        `px-2 flex items-center gap-2 py-2 font-medium rounded-lg text-base ${
          btn === "default"
            ? "bg-LT_WHITE text-LT_RED-100"
            : "bg-LT_RED-200 text-white"
        }`,
        className
      )}
    >
      {children}
    </button>
  )
}

export default DefaultButton
