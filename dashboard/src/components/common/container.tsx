import { twMerge } from "tailwind-merge"
import React, { HTMLAttributes } from "react"

type Props = {
  className?: string
  children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

const Container = ({ children, className, ...rest }: Props) => {
  return (
    <section {...rest} className={twMerge("px-6 mx-auto w-full", className)}>
      {children}
    </section>
  )
}

export default Container
