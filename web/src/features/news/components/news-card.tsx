import { useNavigate } from 'react-router-dom';
import { dateFormat } from '@/shared/utils/date';
import { NewsEntity } from '../@types/news.types';
import Button from '@/shared/components/ui/button/button';
import useIframe from '@/shared/hooks/use-iframe';

type Prop = {
  news: NewsEntity;
};

export default function NewsCard({ news: { createdAt, title, id, image } }: Prop) {
  const navigate = useNavigate();
  const { basePath } = useIframe();

  return (
    <div className="lg:w-full flex flex-col gap-4">
      <div className="relative w-full h-[240px]">
        <img src={image} alt="thumbnail de notícia" className="absolute w-full h-full rounded-xl object-cover" />
      </div>
      <span className="text-base">{dateFormat(createdAt)}</span>

      <h1 className="font-semibold text-[20px] line-clamp-2">{title}</h1>

      <Button intent={'secondary'} onClick={() => navigate(`${basePath}/noticia/${id}`)}>
        Ler mais
      </Button>
    </div>
  );
}
