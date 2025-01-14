import { PlusIcon } from "lucide-react"
import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import usePagination from "@/hooks/usePagination"
import { useAgencies } from "@/hooks/useAgencies"
import Pagination from "@/components/common/pagination"
import AgencyTable from "@/components/agency/agency-table"
import NothingToShow from "@/components/common/nothing-to-show"
import AgencyTableSkeleton from "@/components/skeletons/agency-table-skeleton"

const AgenciesPage = () => {
  const { currentPage, setSearch } = usePagination()
  const { agencies, isLoading } = useAgencies(currentPage)

  return (
    <main className="bg-white p-4 rounded-lg w-full h-full flex flex-col items-center justify-center gap-4">
      <Button asChild className="bg-YELLOW self-end">
        <NavLink to={"/adicionar-agencia"} className="flex items-center">
          <PlusIcon />
          Adicionar
        </NavLink>
      </Button>

      {isLoading ? (
        <AgencyTableSkeleton />
      ) : agencies && agencies.data.length > 0 ? (
        <>
          <AgencyTable agencies={agencies.data} />
          <Pagination
            setSearch={setSearch}
            currentPage={currentPage}
            pages={agencies.totalPages}
          />
        </>
      ) : (
        <NothingToShow />
      )}
    </main>
  )
}

export default AgenciesPage
