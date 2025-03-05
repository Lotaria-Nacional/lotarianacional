import { INews } from "@/interfaces";
import LinkButton from "../ui/button/link-button";

type Props = {
  data: INews;
};

const OtherNewsRow = ({ data }: Props) => {
  console.log(data.createdAt)
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
        <span className="text-sm text-zinc-400">{data.createdAt}</span>

        <LinkButton link={`/noticia/${data.id}`} className="py-1 px-4">
          Ler mais
        </LinkButton>
      </div>
    </li>
  );
};

export default OtherNewsRow;
