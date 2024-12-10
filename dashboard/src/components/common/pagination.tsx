import { useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

type Props = {
  totalPage: number
}

const Pagination = ({ totalPage }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  //  2 -> 3 -> 5 -> 6 -> 7
  // -1 -> 0 -> 1 -> 2 -> 3

  const getSequence = () => {
    let start = currentPage - 2
    let end = currentPage + 2

    if (start < 1) {
      start = 1
      end = 5
    }

    if (end > totalPage) {
      start = totalPage - 4
      end = totalPage
    }

    return Array.from({ length: end - start + 1 }, (_, num) => start + num)
  }

  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPage))
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const sequence = getSequence()

  return (
    <div className="flex w-full items-center justify-center mx-auto">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="w-[39px] h-[38px] border border-GRAY-100 text-GRAY-200 flex items-center justify-center"
      >
        <FiChevronLeft />
      </button>

      {sequence.map((num, index) => (
        <button
          key={index}
          disabled={num === currentPage}
          onClick={() => handleChangePage(num)}
          style={{
            color: currentPage === num ? "#FFF" : "",
            backgroundColor: currentPage === num ? "#951913" : "",
          }}
          className="w-[39px] h-[38px] border border-GRAY-100 p-4 text-black flex items-center justify-center"
        >
          {num}
        </button>
      ))}

      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPage}
        className="w-[39px] h-[38px] border border-GRAY-100 text-GRAY-200 flex items-center justify-center"
      >
        <FiChevronRight />
      </button>
    </div>
  )
}

export default Pagination
