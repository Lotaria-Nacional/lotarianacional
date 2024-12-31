import { useNews } from "@/hooks/api/query/useNews"
import { dateFormat } from "../utils/date"
import { SOCIAL_MEDIA } from "@/constants/links"
import { useNewsById } from "@/hooks/api/query/useNewsById"
import { NavLink, useParams } from "react-router-dom"
import Container from "../components/common/container"
import EmptyState from "@/components/common/empty-state"
import OtherNewsSkeleton from "@/components/noticias/other-news-skeleton"
import SingleNewsSkeleton from "@/components/noticias/single-news-skeleton"

const NoticiaSinglePage = () => {
  const { id } = useParams()
  const { news, isLoading: isLoadingOtherNews } = useNews()
  const { newsById, isLoading } = useNewsById(id!)

  return (
    <Container className="py-12 items-start min-h-screen">
      <section className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8 items-start w-full">
        {/** LEFT SIDE */}
        {isLoading ? (
          <SingleNewsSkeleton />
        ) : (
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-[200px] md:h-[400px]">
                <img
                  src={newsById?.image}
                  alt={newsById?.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                />
              </div>
              <header className="flex flex-col gap-3">
                <span className="text-lg">
                  {newsById?.createdAt
                    ? dateFormat(newsById.createdAt)
                    : newsById?.createdAt}
                </span>
                <h1 className="font-bold text-2xl">{newsById?.title}</h1>
              </header>
            </div>

            <hr className="my-8" />
            <p className="text-lg">{newsById?.description}</p>
          </div>
        )}

        {/** RIGHT SIDE */}

        <div className="flex flex-col w-full h-full">
          <div className="flex items-center justify-start gap-2">
            <span>Compartilhar: </span>
            <div className="flex items-center gap-2">
              {SOCIAL_MEDIA.map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  className="size-7 flex items-center text-white bg-neutral-700 justify-center text-sm rounded-full"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Outras notícias</h1>

            {isLoadingOtherNews ? (
              <OtherNewsSkeleton />
            ) : news.length > 0 ? (
              <ul className="flex flex-col gap-8">
                {news.map((data) => (
                  <li
                    key={data.id}
                    className="flex lg:flex-row flex-col items-center gap-4 w-full"
                  >
                    <div className="relative h-[180px] md:h-[150px] w-[350px] lg:w-[600px]">
                      <img
                        alt={data.title}
                        src={data.image}
                        className="absolute object-cover w-full h-full inset-0 rounded-lg"
                      />
                    </div>

                    <div className="flex flex-col w-full gap-2">
                      <span className="text-lg line-clamp-3 font-bold">
                        {data.title}
                      </span>
                      <span className="text-sm text-zinc-400">
                        {dateFormat(data.createdAt)}
                      </span>

                      <NavLink
                        reloadDocument
                        to={`/noticia/${data.id}`}
                        className="text-base w-fit text-LT_RED-100 bg-transparent"
                      >
                        Ler mais
                      </NavLink>
                    </div>
                  </li>
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
