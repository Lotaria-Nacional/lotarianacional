import Button from "@/shared/components/ui/button/button";
import { NewsEntity } from "../@types/news.types";
import { useNavigate } from "react-router-dom";

type Props = {
  data: NewsEntity;
};

export default function OtherNewsRow({ data }: Props) {
  const navigate = useNavigate();
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
          {data.createdAt
            .toString()
            .split("T")[0]
            .split("-")
            .reverse()
            .join("-")}
        </span>

        <Button
          intent={"secondary"}
          onClick={() => navigate(`/noticia/${data.id}`)}
        >
          Ler mais
        </Button>
      </div>
    </li>
  );
}
