import { INews } from "@/interfaces"
import { dateFormat } from "@/utils/date"
import { NavLink } from "react-router-dom"

type Props = {
  data: INews
}

const OtherNewsRow = ({ data }: Props) => {
  return (
    <li
      key={data.id}
      className="flex lg:flex-row flex-col items-center gap-4 w-full"
    >
      <div className="relative h-[180px] md:h-[150px] w-[350px] lg:w-[600px]">
        <img
          alt={data.title}
          src={data.image}
          className="absolute object-cover w-full h-full inset-0 rounded-lg"
        />
      </div>

      <div className="flex flex-col w-full gap-2">
        <span className="text-lg line-clamp-3 font-bold">{data.title}</span>
        <span className="text-sm text-zinc-400">
          {dateFormat(data.createdAt)}
        </span>

        <NavLink
          reloadDocument
          to={`/noticia/${data.id}`}
          className="py-1 px-4 border rounded-lg text-LT_RED-100 border-LT_RED-100 h-fit hover:scale-[0.9] w-fit duration-200 transition-all ease-in-out"
        >
          Ler mais
        </NavLink>
      </div>
    </li>
  )
}

export default OtherNewsRow
