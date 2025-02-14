import { PropsWithChildren } from "react"

type Props = {
  type?: "1" | "A" | "a" | "I" | "i"
  list?: ""
} & PropsWithChildren

export default function RegulationListContent({ children, type = "1" }: Props) {
  return (
    <ol type={type} className="flex flex-col w-full items-start list-decimal">
      {children}
    </ol>
  )
}
