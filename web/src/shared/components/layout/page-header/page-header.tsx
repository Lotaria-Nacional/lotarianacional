import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

type Props = PropsWithChildren & { className?: string }

export default function Container({ children, className }: Props) {
  return (
    <section
      className={cn(
        "w-full flex border-b pb-3 items-center justify-between lg:px-0",
        className
      )}
    >
      {children}
    </section>
  )
}
