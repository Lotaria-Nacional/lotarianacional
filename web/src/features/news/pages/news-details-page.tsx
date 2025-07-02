import { useParams } from "react-router-dom"
import OtherNewsRow from "../components/other-news-row"
import { isValidArray } from "@/shared/utils/array-validation"
import EmptyState from "@/shared/components/common/empty-state"
import OtherNewsSkeleton from "../components/other-news-skeleton"
import NewsDetailsContent from "../components/news-details-content"
import NewsDetailsSkeleton from "../components/news-details-skeleton"
import Container from "@/shared/components/common/container/container"
import { useGetNewsById } from "@/features/news/hooks/use-get-news-by-id"
import { useFetchManyNews } from "@/features/news/hooks/use-fetch-many-news"
import SocialMediaShareButtons from "../components/social-media-share-buttons"

export default function NewsDetailsPage() {
  const { id } = useParams()
  const currentNews = useGetNewsById(id!)
  const otherNews = useFetchManyNews()

  if (!currentNews.data && !otherNews.data?.data) {
    return <EmptyState message="Não há notícias ainda." />
  }

  return (
    <Container className="py-12 items-start min-h-screen">
      <section className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8 items-start w-full">
        {/** LEFT SIDE */}
        {currentNews.isLoading ? (
          <NewsDetailsSkeleton />
        ) : currentNews.data ? (
          <NewsDetailsContent data={currentNews.data} />
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
            {otherNews.isLoading ? (
              <OtherNewsSkeleton />
            ) : otherNews.data && isValidArray(otherNews.data.data) ? (
              <ul className="flex flex-col gap-8">
                {otherNews.data.data.map((data) => (
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
  )
}
