import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

type Props = {
  item: {
    id: number
    link: string
    icon: string
    text: string
  }
  className?: string
}

const LinkCard = ({ item: { icon, link, text }, className }: Props) => {
  return (
    <Link
      to={link}
      reloadDocument
      className="flex w-full h-full flex-col lg:gap-2 items-center"
    >
      <div className="radialGradient w-full h-[180px] lg:h-[230px] rounded-3xl flex items-center justify-center">
        <img
          src={icon}
          className={twMerge("w-full object-contain", className)}
        />
      </div>

      <header className="font-bold text-LT_BLACK uppercase flex flex-col gap-0 mt-3 text-[18px] lg:text-[20px] text-center">
        <h4>{text}</h4>
      </header>
    </Link>
  )
}

export default LinkCard
