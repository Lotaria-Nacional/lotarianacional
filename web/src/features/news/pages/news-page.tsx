import NewsCard from "../components/news-card";
import NewsSkeleton from "../components/news-skeleton";
import { useFetchManyNews } from "@/features/news/hooks/use-fetch-many-news";
import { usePagination } from "@/shared/hooks/use-pagination";
import Pagination from "@/shared/components/common/pagination";
import EmptyState from "@/shared/components/common/empty-state";
import Container from "@/shared/components/common/container/container";

const NoticiasPage = () => {
  const { currentPage, setSearch } = usePagination();
  const { data: news, isLoading } = useFetchManyNews(currentPage);

  return (
    <Container className="py-12 flex flex-col gap-4 w-full">
      {isLoading ? (
        <NewsSkeleton />
      ) : news && Array.isArray(news.data) && news.data.length > 0 ? (
        <>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {news.data.map((data, index) => (
              <NewsCard key={index} news={data} />
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
  );
};

export default NoticiasPage;
