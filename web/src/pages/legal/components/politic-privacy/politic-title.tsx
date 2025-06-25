import { PropsWithChildren } from "react"

type Props = PropsWithChildren

export default function PoliticTitle({ children }: Props) {
  return <h2 className="font-bold">{children}</h2>
}
