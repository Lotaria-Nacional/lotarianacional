import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
} & PropsWithChildren
export default function PageTitle({ children, className }: Props) {
  return (
    <h1
      className={twMerge(
        "text-center capitalize font-bold lg:text-[18px] text-[14px]",
        className
      )}
    >
      {children}
    </h1>
  )
}
