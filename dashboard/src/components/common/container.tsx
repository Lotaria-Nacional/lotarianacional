import { twMerge } from "tailwind-merge"
import React, { HTMLAttributes } from "react"

type Props = {
  className?: string
  children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

const Container = ({ children, className, ...rest }: Props) => {
  return (
    <section
      {...rest}
      className={twMerge("lg:px-6 px-1 mx-auto min-w-[1000px]", className)}
    >
      {children}
    </section>
  )
}

export default Container
