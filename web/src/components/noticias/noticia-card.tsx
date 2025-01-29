import UI from "../ui"
import { INews } from "../../interfaces"
import { dateFormat } from "../../utils/date"

type Prop = {
  noticia: INews
}

const NoticiaCard = ({ noticia: { createdAt, image, title, id } }: Prop) => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="relative w-full lg:w-[420px] h-[250px]">
        <img
          src={image}
          alt="thumbnail de notícia"
          className="absolute w-full h-full rounded-xl object-cover"
        />
      </div>
      <span className="text-base">{dateFormat(createdAt)}</span>

      <h1 className="font-semibold text-[20px] line-clamp-2">{title}</h1>

      <UI.LinkButton
        link={`/noticia/${id}`}
        className="py-1 px-4 h-fit hover:scale-[0.9] w-fit duration-200 transition-all ease-in-out"
      >
        Ler mais
      </UI.LinkButton>
    </div>
  )
}

export default NoticiaCard
