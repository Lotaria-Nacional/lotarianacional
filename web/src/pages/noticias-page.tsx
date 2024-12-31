import { useNews } from "@/hooks/api/query/useNews"
import Container from "../components/common/container"
import EmptyState from "@/components/common/empty-state"
import NoticiaCard from "../components/noticias/noticia-card"
import NewsSkeleton from "@/components/noticias/news-skeleton"

const NoticiasPage = () => {
  const { isLoading, news } = useNews()

  return (
    <Container className="py-12">
      {isLoading ? (
        <NewsSkeleton />
      ) : news.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((data, index) => (
            <NoticiaCard key={index} noticia={data} />
          ))}
        </div>
      ) : (
        <EmptyState message="Não há notícias ainda." />
      )}
    </Container>
  )
}

export default NoticiasPage
