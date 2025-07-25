import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

type Props = { className?: string } & PropsWithChildren

export default function Title({ children, className }: Props) {
  return (
    <h1
      className={twMerge(
        "text-left lg:text-center capitalize font-semibold text-[18px]",
        className
      )}
    >
      {children}
    </h1>
  )
}
