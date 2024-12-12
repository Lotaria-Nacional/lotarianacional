import NoticiaCard from "./noticia-card"
import { useEffect, useState } from "react"
import { INews } from "../../../interfaces"
import { getNews } from "../../../api/noticias.api"

const ListingNoticias = () => {
  const [noticias, setNoticias] = useState<INews[]>([])

  useEffect(() => {
    const fetch = async () => {
      const data = await getNews()

      setNoticias(data)
    }
    fetch()
  }, [])

  const lastThreeNews = noticias.slice(-3)
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {lastThreeNews.map((data, index) => (
        <NoticiaCard key={index} noticia={data} />
      ))}
    </div>
  )
}

export default ListingNoticias
