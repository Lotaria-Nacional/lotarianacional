import { INews } from "../interfaces"
import { useEffect, useState } from "react"
import Container from "../components/container"
import { NavLink, useParams } from "react-router-dom"
import { getNews, getNewsById } from "../api/noticias.api"
import { SiX, SiFacebook, SiWhatsapp, SiLinkedin } from "react-icons/si"

const SOCIAL_MEDIA = [
  {
    icon: <SiFacebook />,
    link: "#",
  },
  {
    icon: <SiX />,
    link: "#",
  },
  {
    icon: <SiLinkedin />,
    link: "#",
  },
  {
    icon: <SiWhatsapp />,
    link: "#",
  },
] as const

const NoticiaSinglePage = () => {
  const { id } = useParams()
  const [news, setNews] = useState<INews | undefined>()
  const [otherNews, setOtherNews] = useState<INews[]>([])

  useEffect(() => {
    const fetch = async () => {
      const [data1, data2] = await Promise.all([getNewsById(id!), getNews()])
      setNews(data1)
      setOtherNews(data2)
    }
    fetch()
  }, [id])

  return (
    <Container className="py-12 items-start min-h-screen">
      <section className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8 items-start w-full">
        {/** LEFT SIDE */}
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-[200px] md:h-[400px]">
              <img
                src={news?.image}
                alt={news?.title}
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>
            <header className="flex flex-col gap-3">
              <span className="text-lg">{news?.createdAt.split("T")[0]}</span>
              <h1 className="font-bold text-2xl">{news?.title}</h1>
            </header>
          </div>

          <hr className="my-8" />
          <p className="text-lg">{news?.description}</p>
        </div>

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
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Outras notícias</h1>
            <ul className="flex flex-col gap-8">
              {otherNews.map((data) => (
                <li key={data.id} className="flex items-center gap-4 w-full">
                  <div className="relative h-[100px] md:h-[150px] w-[600px]">
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
                      {data.createdAt.split("T")[0]}
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
          </div>
        </div>
      </section>
    </Container>
  )
}

export default NoticiaSinglePage
