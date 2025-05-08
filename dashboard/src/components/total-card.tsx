import { twMerge } from "tailwind-merge"
import Icon, { IconNameType } from "./ui/icon"

type Props = {
  total: number
  className?: string
  name: "resultados" | "agências"
}

export default function TotalCard({ name, total, className }: Props) {
  const icon: IconNameType = name === "resultados" ? "results" : "agency"
  return (
    <div
      className={twMerge(
        "bg-white rounded-card w-full flex gap-2 flex-col min-h-[220px] h-full items-center justify-center lg:py-10",
        className
      )}
    >
      <div className="size-[40px] md:size-[46px] p-2 lg:p-0 rounded-full bg-LT-RED-200 flex items-center justify-center">
        <Icon name={icon} />
      </div>
      <h2 className="font-medium text-[14px] text-center lg:text-lg capitalize">
        total de {name}
      </h2>
      <span className="font-medium text-3xl text-LT-RED-200 capitalize">
        {total}
      </span>
    </div>
  )
}
