import { Plus } from "lucide-react"
import { INews } from "@/interfaces"
import { getNews } from "@/api/news.api"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import NewsTable from "@/components/news/news-table"
import NothingToShow from "@/components/common/nothing-to-show"

const NewsPage = () => {
  const [news, setNews] = useState<INews[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      const data = await getNews()
      setNews(data)
      setIsLoading(false)
    }
    fetch()
  }, [])

  if (isLoading) return <span>Carregando...</span>
  if (news.length === 0) return <NothingToShow />

  return (
    <main className="w-full flex items-center justify-center min-h-screen">
      <div className="bg-white p-4 w-[1128px] rounded-[20px] flex flex-col gap-4">
        <Button className="bg-YELLOW flex self-end" asChild>
          <NavLink to={"/adicionar-noticia"}>
            <Plus />
            Adicionar
          </NavLink>
        </Button>

        <NewsTable news={news} />
      </div>
    </main>
  )
}

export default NewsPage
