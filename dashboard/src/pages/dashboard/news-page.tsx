import { isAxiosError } from "axios"
import { Plus } from "lucide-react"
import { INews } from "@/interfaces"
import { toast } from "react-toastify"
import { getNews } from "@/api/news.api"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import NewsTable from "@/components/news/news-table"
import NothingToShow from "@/components/common/nothing-to-show"
import NewsTableSkeleton from "@/components/skeletons/news-table-skeleton"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"

const NewsPage = () => {
  const [news, setNews] = useState<INews[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getNews()
        setNews(data)
      } catch (error) {
        if (isAxiosError(error)) {
          if (error.response) {
            return toast.error(TRY_LATER_ERROR)
          }
          toast.error(error.message)
        }
        return toast.error(SERVER_CONNECTION_ERROR)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  if (isLoading) return <NewsTableSkeleton />

  return (
    <main className="w-full flex items-center justify-center">
      <div className="bg-white p-4 w-[1128px] rounded-[20px] flex flex-col gap-4">
        <Button className="bg-YELLOW flex self-end" asChild>
          <NavLink to={"/adicionar-noticia"}>
            <Plus />
            Adicionar
          </NavLink>
        </Button>

        {news.length > 0 ? <NewsTable news={news} /> : <NothingToShow />}
      </div>
    </main>
  )
}

export default NewsPage
