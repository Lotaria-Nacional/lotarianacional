import { INews } from "../../interfaces"
import { dateFormat } from "../../utils/date"
import LinkButton from "../ui/button/link-button"

type Prop = {
  noticia: INews
}

const NoticiaCard = ({ noticia: { createdAt, title, id } }: Prop) => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      {/* <div className="relative w-full lg:w-[420px] h-[250px]">
        <img
          src={image}
          alt="thumbnail de notícia"
          className="absolute w-full h-full rounded-xl object-cover"
        />
      </div> */}
      <span className="text-base">{dateFormat(createdAt)}</span>

      <h1 className="font-semibold text-[20px] line-clamp-2">{title}</h1>

      <LinkButton link={`/noticia/${id}`} className="py-1 px-4">
        Ler mais
      </LinkButton>
    </div>
  )
}

export default NoticiaCard
