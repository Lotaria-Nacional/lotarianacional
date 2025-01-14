import NoticiaCard from "./noticia-card"
import EmptyState from "../common/empty-state"
import { useNews } from "@/hooks/api/query/useNews"
import ListingNewsSkeleton from "./listing-news-skeleton"

const ListingNoticias = () => {
  const { isLoading, news } = useNews(1)

  return (
    <>
      {isLoading ? (
        <ListingNewsSkeleton />
      ) : news && news?.data.length > 0 ? (
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.data.slice(-3).map((data) => (
            <NoticiaCard key={data.id} noticia={data} />
          ))}
        </div>
      ) : (
        <EmptyState className="h-[100px]" message="Não há notícias ainda." />
      )}
    </>
  )
}

export default ListingNoticias
