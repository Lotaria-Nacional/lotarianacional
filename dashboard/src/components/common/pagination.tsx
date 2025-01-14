import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import { Button } from "../ui/button"
import { SetURLSearchParams } from "react-router-dom"
import { useMemo } from "react"

type Props = {
  pages?: number
  currentPage: number
  setSearch: SetURLSearchParams
}

const MAX_VIEW_BUTTONS = 3

const Pagination = ({ pages, currentPage, setSearch }: Props) => {
  if (!pages || pages <= 1) return null // Se não houver páginas, não renderiza nada

  const updatePage = (newPage: number) => {
    setSearch((state) => {
      state.set("page", String(newPage))
      return state
    })
  }

  const controls = useMemo(() => {
    const calculateMaxViewButtons = () => {
      let maxLeft = currentPage - Math.floor(MAX_VIEW_BUTTONS / 2)
      let maxRight = currentPage + Math.floor(MAX_VIEW_BUTTONS / 2)

      if (maxLeft < 1) {
        maxLeft = 1
        maxRight = MAX_VIEW_BUTTONS
      }

      if (maxRight > pages) {
        maxRight = pages
        maxLeft = pages - (MAX_VIEW_BUTTONS - 1)
        if (maxLeft < 1) {
          maxLeft = 1
        }
      }

      return { maxLeft, maxRight }
    }

    return {
      calculateMaxViewButtons,
      nextPage: () => {
        if (currentPage < pages) updatePage(currentPage + 1)
      },
      prevPage: () => {
        if (currentPage > 1) updatePage(currentPage - 1)
      },
      goToStart: () => updatePage(1),
      goToEnd: () => updatePage(pages),
    }
  }, [currentPage, pages, setSearch])

  const { maxLeft, maxRight } = controls.calculateMaxViewButtons()

  const slicedPages = Array.from(
    { length: maxRight - maxLeft + 1 },
    (_, i) => i + maxLeft
  )

  return (
    <div className="w-full px-4 lg:px-0 mx-auto justify-center py-8 flex items-center gap-2 lg:w-[50vw]">
      <Button
        className="bg-RED-200 text-white"
        onClick={controls.goToStart}
        aria-label="Ir para o início"
      >
        <ChevronsLeft />
      </Button>
      <Button
        className="bg-RED-200 text-white"
        onClick={controls.prevPage}
        aria-label="Página anterior"
      >
        <ChevronLeft />
      </Button>

      {slicedPages.map((page) => (
        <Button
          key={page}
          onClick={() => updatePage(page)}
          aria-label={`Ir para a página ${page}`}
          className={`bg-RED-200 text-white ${
            page === currentPage ? "bg-black" : ""
          }`}
        >
          {page}
        </Button>
      ))}

      <Button
        className="bg-RED-200 text-white"
        onClick={controls.nextPage}
        aria-label="Próxima página"
      >
        <ChevronRight />
      </Button>
      <Button
        className="bg-RED-200 text-white"
        onClick={controls.goToEnd}
        aria-label="Ir para o fim"
      >
        <ChevronsRight />
      </Button>
    </div>
  )
}

export default Pagination
