import { INews } from "@/interfaces";
import { dateFormat } from "@/utils/date";
import DOMPurify from "dompurify";

type Props = {
  data: INews;
};

const SingleNewsContent = ({ data }: Props) => {
  const sanitizedHTML = DOMPurify.sanitize(data.description);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="relative w-full h-[200px] md:h-[400px]">
          <img
            src={data.image}
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
        </div>
        <header className="flex flex-col gap-3">
          <span className="text-lg">{dateFormat(data.createdAt)}</span>
          <h1 className="font-bold text-2xl">{data.title}</h1>
        </header>
      </div>

      <hr className="my-8" />
      <div
        className="text-lg"
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      />
    </div>
  );
};

export default SingleNewsContent;
