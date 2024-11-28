import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const RootButton = ({ children, className, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={twMerge(
        "px-8 h-[35px] rounded-xl bg-LT_WHITE text-LT_BLACK text-sm uppercase",
        className
      )}
    >
      {children}
    </button>
  )
}

export default RootButton
