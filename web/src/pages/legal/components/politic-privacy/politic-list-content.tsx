import { PropsWithChildren } from "react"

type Props = PropsWithChildren

export default function PoliticListContent({ children }: Props) {
  return <ul className="list-disc ml-10">{children}</ul>
}
