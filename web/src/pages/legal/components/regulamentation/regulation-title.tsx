import { PropsWithChildren } from "react"

type Props = PropsWithChildren

export default function RegulationTitle({ children }: Props) {
  return <header className="flex flex-col items-center">{children}</header>
}
