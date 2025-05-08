import Icon from "@/components/ui/icon"
import { Link } from "react-router-dom"
import { isValidArray } from "@/lib/utils"
import EmptyState from "@/components/empty-state"
import Button from "@/components/ui/lottary-button"
import { useGetAllNews } from "@/features/news/hooks/query"
import NewsTable from "@/features/news/components/news-table"
import NewsTableSkeleton from "@/features/news/components/news-table-skeleton"

export default function NewsPage() {
  const { data, isLoading } = useGetAllNews({ page: 1 })
  return (
    <div className="main w-full h-full flex">
      <section className="bg-white flex flex-col gap-6 justify-between rounded-card h-auto md:h-full p-4 w-full">
        <div className="flex flex-col gap-2">
          <Link to={"/noticias/adicionar"} className="self-end">
            <Button variant="yellow">
              <Icon name="plus" className="md:size-[12px]" />
              <span>Adicionar</span>
            </Button>
          </Link>
          {isLoading ? (
            <NewsTableSkeleton />
          ) : data && isValidArray(data.data) ? (
            <NewsTable data={data} />
          ) : (
            <EmptyState message="Ainda não há notícias." />
          )}
        </div>
      </section>
    </div>
  )
}
