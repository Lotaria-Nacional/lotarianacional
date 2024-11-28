import Container from "../components/container"
import NoticiaCard from "../features/noticias/components/noticia-card"

import NOTICIAS from "../features/noticias/db/noticias.json"

const NoticiasPage = () => {
  return (
    <Container className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {NOTICIAS.map((data, index) => (
          <NoticiaCard key={index} noticia={data} />
        ))}
      </div>
    </Container>
  )
}

export default NoticiasPage
