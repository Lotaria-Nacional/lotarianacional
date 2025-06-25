import NewsCard from "./news-card";
import { useNews } from "@/features/news/hooks/useNews";
import ListingNewsSkeleton from "./news-listing-skeleton";
import EmptyState from "@/shared/components/common/empty-state";

export default function NewsListing() {
  const { isLoading, news } = useNews(1);

  const lastNews = news.data.slice(0, 3);

  return (
    <>
      {isLoading ? (
        <ListingNewsSkeleton />
      ) : news && news?.data.length > 0 ? (
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-3">
          {lastNews.map((data) => (
            <NewsCard key={data.id} news={data} />
          ))}
        </div>
      ) : (
        <EmptyState className="h-[100px]" message="Não há notícias ainda." />
      )}
    </>
  );
}
