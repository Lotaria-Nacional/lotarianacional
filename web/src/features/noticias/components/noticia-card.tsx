import { NavLink } from "react-router-dom"
import { IMAGES } from "../../../constants/assets"

type Prop = {
  noticia: {
    id: number
    date: string
    title: string
    image?: string
    description: string
  }
}

const NoticiaCard = ({ noticia: { date, title, id } }: Prop) => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <img
        src={IMAGES.noticia}
        alt="thumbnail de notícia"
        className="aspect-[12/6] rounded-xl object-cover"
      />
      <span>{date}</span>

      <h1 className="font-bold text-xl line-clamp-3">{title}</h1>

      <NavLink
        to={`/noticia/${id}`}
        className="border border-LT_RED-100 text-LT_RED-100 flex items-center justify-center rounded-lg w-fit h-[35px] px-4"
      >
        Ler mais
      </NavLink>
    </div>
  )
}

export default NoticiaCard
