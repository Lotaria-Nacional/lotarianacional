import NoticiaCard from "./noticia-card"
import { useNews } from "@/hooks/useNews"
import EmptyState from "../common/empty-state"
import ListingNewsSkeleton from "./listing-news-skeleton"

const ListingNoticias = () => {
  const { isLoading, news } = useNews()

  const lastThreeNews = news.slice(-3)

  return (
    <>
      {isLoading ? (
        <ListingNewsSkeleton />
      ) : lastThreeNews.length > 0 ? (
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lastThreeNews.map((data, index) => (
            <NoticiaCard key={index} noticia={data} />
          ))}
        </div>
      ) : (
        <EmptyState className="h-[100px]" message="Não há notícias ainda." />
      )}
    </>
  )
}

export default ListingNoticias
