import Pagination from "@/components/pagination"
import { useNews } from "@/hooks/api/query/useNews"
import Container from "../components/common/container"
import EmptyState from "@/components/common/empty-state"
import NoticiaCard from "../components/noticias/noticia-card"
import NewsSkeleton from "@/components/noticias/news-skeleton"
import { usePagination } from "@/hooks/usePagination"

const NoticiasPage = () => {
  const { currentPage, setSearch } = usePagination()
  const { isLoading, news } = useNews(currentPage)

  return (
    <Container className="py-12 flex flex-col gap-4 w-full">
      {isLoading ? (
        <NewsSkeleton />
      ) : news && Array.isArray(news.data) && news.data.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.data.map((data, index) => (
              <NoticiaCard key={index} noticia={data} />
            ))}
          </div>

          <Pagination
            setSearch={setSearch}
            pages={news.totalPages}
            currentPage={currentPage}
          />
        </>
      ) : (
        <EmptyState message="Não há notícias ainda." />
      )}
    </Container>
  )
}

export default NoticiasPage
