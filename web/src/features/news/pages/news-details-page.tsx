import { useParams } from "react-router-dom";
import { useFetchManyNews } from "@/features/news/hooks/use-fetch-many-news";
import OtherNewsRow from "../components/other-news-row";
import { isValidArray } from "@/shared/utils/array-validation";
import { useNewsById } from "@/features/news/hooks/useNewsById";
import EmptyState from "@/shared/components/common/empty-state";
import OtherNewsSkeleton from "../components/other-news-skeleton";
import NewsDetailsContent from "../components/news-details-content";
import NewsDetailsSkeleton from "../components/news-details-skeleton";
import Container from "@/shared/components/common/container/container";
import SocialMediaShareButtons from "../components/social-media-share-buttons";

export default function NewsDetailsPage() {
  const { id } = useParams();
  const { data: news, isLoading: isLoadingOtherNews } = useFetchManyNews();

  const { newsById, isLoading } = useNewsById(id!);

  if (!newsById && !news?.data)
    return <EmptyState message="Não há notícias ainda." />;

  return (
    <Container className="py-12 items-start min-h-screen">
      <section className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8 items-start w-full">
        {/** LEFT SIDE */}
        {isLoading ? (
          <NewsDetailsSkeleton />
        ) : newsById ? (
          <NewsDetailsContent data={newsById} />
        ) : (
          <EmptyState message="Não há notícias ainda." />
        )}

        {/** RIGHT SIDE */}

        <div className="flex flex-col w-full h-full">
          <div className="flex items-center justify-start gap-2">
            <span>Compartilhar: </span>
            <SocialMediaShareButtons />
          </div>

          <hr className="my-4" />

          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Outras notícias</h1>

            {isLoadingOtherNews ? (
              <OtherNewsSkeleton />
            ) : news && isValidArray(news.data) ? (
              <ul className="flex flex-col gap-8">
                {news.data.map((data) => (
                  <OtherNewsRow key={data.id} data={data} />
                ))}
              </ul>
            ) : (
              <EmptyState message="Não há notícias." />
            )}
          </div>
        </div>
      </section>
    </Container>
  );
}
