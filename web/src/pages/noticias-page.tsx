import { useEffect, useState } from "react"
import Container from "../components/container"
import NoticiaCard from "../features/noticias/components/noticia-card"

import { INews } from "../interfaces"
import { getNews } from "../api/noticias.api"

const NoticiasPage = () => {
  const [noticias, setNoticias] = useState<INews[]>([])

  useEffect(() => {
    const fetch = async () => {
      const data = await getNews()

      setNoticias(data)
    }
    fetch()
  }, [])

  return (
    <Container className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {noticias.map((data, index) => (
          <NoticiaCard key={index} noticia={data} />
        ))}
      </div>
    </Container>
  )
}

export default NoticiasPage
