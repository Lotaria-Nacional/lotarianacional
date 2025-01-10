import { Plus } from "lucide-react"
import { useNews } from "@/hooks/useNews"
import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import NewsTable from "@/components/news/news-table"
import NothingToShow from "@/components/common/nothing-to-show"
import NewsTableSkeleton from "@/components/skeletons/news-table-skeleton"

const NewsPage = () => {
  const { isLoading, news } = useNews()

  return (
    <main className="w-full flex items-center justify-center">
      <div className="bg-white p-4 w-[1128px] rounded-[20px] flex flex-col gap-4">
        <Button className="bg-YELLOW flex self-end" asChild>
          <NavLink to={"/adicionar-noticia"}>
            <Plus />
            Adicionar
          </NavLink>
        </Button>

        {isLoading ? (
          <NewsTableSkeleton />
        ) : news && news.length > 0 ? (
          <NewsTable news={news} />
        ) : (
          <NothingToShow />
        )}
      </div>
    </main>
  )
}

export default NewsPage
