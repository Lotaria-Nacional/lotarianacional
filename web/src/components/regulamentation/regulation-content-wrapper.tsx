import { PropsWithChildren } from "react"

type Props = PropsWithChildren

export default function RegulationContentWrapper({ children }: Props) {
  return <div className="flex flex-col gap-4">{children}</div>
}
