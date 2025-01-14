import { useSearchParams } from "react-router-dom"

const usePagination = () => {
  const [search, setSearch] = useSearchParams()
  const currentPage = parseInt(search.get("page") || "1")

  return {
    currentPage,
    setSearch,
  }
}

export default usePagination
