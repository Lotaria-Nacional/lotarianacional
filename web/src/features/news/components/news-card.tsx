import { dateFormat } from "@/shared/utils/date";
import { NewsEntity } from "../@types/news.types";
import LinkButton from "@/shared/components/ui/button/link-button";

type Prop = {
  news: NewsEntity;
};

export default function NewsCard({
  news: { createdAt, title, id, image },
}: Prop) {
  return (
    <div className="lg:w-full flex flex-col gap-4">
      <div className="relative w-full h-[240px]">
        <img
          src={image}
          alt="thumbnail de notícia"
          className="absolute w-full h-full rounded-xl object-cover"
        />
      </div>
      <span className="text-base">{dateFormat(createdAt)}</span>

      <h1 className="font-semibold text-[20px] line-clamp-2">{title}</h1>

      <LinkButton link={`/noticia/${id}`} className="py-1 px-4">
        Ler mais
      </LinkButton>
    </div>
  );
}
