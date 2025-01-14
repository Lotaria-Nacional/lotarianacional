import { Plus } from "lucide-react"
import { useNews } from "@/hooks/useNews"
import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import NewsTable from "@/components/news/news-table"
import NothingToShow from "@/components/common/nothing-to-show"
import NewsTableSkeleton from "@/components/skeletons/news-table-skeleton"
import Pagination from "@/components/common/pagination"
import usePagination from "@/hooks/usePagination"

const NewsPage = () => {
  const { currentPage, setSearch } = usePagination()
  const { isLoading, news } = useNews(currentPage)

  return (
    <main className="w-full flex items-center justify-center">
      <div className="bg-white p-4 w-[1128px] rounded-[20px] flex flex-col items-center justify-center gap-4">
        <Button className="bg-YELLOW flex self-end" asChild>
          <NavLink to={"/adicionar-noticia"}>
            <Plus />
            Adicionar
          </NavLink>
        </Button>

        {isLoading ? (
          <NewsTableSkeleton />
        ) : news?.data && news.data.length > 0 ? (
          <>
            <NewsTable news={news.data} />
            <Pagination
              setSearch={setSearch}
              pages={news.totalPages}
              currentPage={currentPage}
            />
          </>
        ) : (
          <NothingToShow />
        )}
      </div>
    </main>
  )
}

export default NewsPage
