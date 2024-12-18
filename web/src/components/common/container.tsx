import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

/**
 * Um Container responsivo usando Tailwind CSS.
 * @param children - Conteúdo a renderizar dentro do Container.
 * @param className - Classes adicionais para customizar o estilo.
 * @param rest - Props adicionais para o HTML.
 */

type Props = {
  className?: string
  defaultClasses?: boolean
  children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

const Container = ({
  children,
  className,
  defaultClasses = true,
  ...rest
}: Props) => {
  return (
    <div
      {...rest}
      className={twMerge(
        defaultClasses
          ? "px-6 xl:w-[1360px] w-full mx-auto flex items-center"
          : "",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
