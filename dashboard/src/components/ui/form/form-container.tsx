import React, { FormHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  className?: string
} & FormHTMLAttributes<HTMLFormElement>

const FormContainer = ({ children, className, ...rest }: Props) => {
  return (
    <form {...rest} className={twMerge("flex flex-col gap-2", className)}>
      {children}
    </form>
  )
}

export default FormContainer
