export const enum StatsTextColor {
  red = "bg-LT_RED-300",
  gray = "bg-zinc-500",
  blue = "bg-[#00A5FF]",
}

type Props = {
  text: string
  color: StatsTextColor
}

const StatsInfoText = (props: Props) => {
  return (
    <div className="flex flex-col text-center lg:flex-row items-center gap-3">
      <div className={`size-3 rounded-full ${props.color}`} />
      <span>{props.text}</span>
    </div>
  )
}

export default StatsInfoText
