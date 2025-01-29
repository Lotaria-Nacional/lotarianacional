import { useParams } from "react-router-dom"
import { useNews } from "@/hooks/api/query/useNews"
import Container from "../components/common/container"
import { isValidArray } from "@/utils/array-validation"
import EmptyState from "@/components/common/empty-state"
import { useNewsById } from "@/hooks/api/query/useNewsById"
import OtherNewsRow from "@/components/noticias/other-news-row"
import OtherNewsSkeleton from "@/components/noticias/other-news-skeleton"
import SingleNewsContent from "@/components/noticias/single-news-content"
import SingleNewsSkeleton from "@/components/noticias/single-news-skeleton"
import SocialMediaShareButtons from "@/components/noticias/social-media-share-buttons"

const NoticiaSinglePage = () => {
  const { id } = useParams()
  const { news, isLoading: isLoadingOtherNews } = useNews()
  const { newsById, isLoading } = useNewsById(id!)
  if (!newsById && news.data.length > 0)
    return <EmptyState message="Não há notícias ainda." />
  return (
    <Container className="py-12 items-start min-h-screen">
      <section className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8 items-start w-full">
        {/** LEFT SIDE */}
        {isLoading ? (
          <SingleNewsSkeleton />
        ) : newsById ? (
          <SingleNewsContent data={newsById} />
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
            ) : isValidArray(news.data) ? (
              <ul className="flex flex-col gap-8">
                {news.data.map((data) => (
                  <OtherNewsRow data={data} />
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

export default NoticiaSinglePage
