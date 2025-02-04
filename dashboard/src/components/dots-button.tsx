import { BsThreeDots } from "react-icons/bs"

import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NavLink } from "react-router-dom"
import { Edit2, Trash2 } from "lucide-react"
import { isAxiosError } from "axios"
import { toast } from "react-toastify"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"
import { deleteDailyResult, getLastDailyResult } from "@/api/results.api"
import { useEffect, useState } from "react"

const DotsButton = () => {
  const [id, setId] = useState("")
  // const [isLoading, setIsLoading] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      const data = await getLastDailyResult()
      setId(data.id)
    }
    fetch()
  }, [])

  const handleDeleteDailyResult = async () => {
    setIsDeleting(true)
    try {
      const response = await deleteDailyResult(id)
      toast.success(response.message)
    } catch (error) {
      if (isAxiosError(error)) {
        if (!error.response) {
          return toast.error(TRY_LATER_ERROR)
        }
        return toast.error(error.response.data.message)
      }
      return toast.error(SERVER_CONNECTION_ERROR)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-2xl text-GRAY-200 flex items-center justify-center">
        <BsThreeDots />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>
          <Edit2 />
          <NavLink to="/editar-resultados">Editar</NavLink>
        </DropdownMenuItem>

        <DropdownMenuItem
          disabled={isDeleting}
          onClick={handleDeleteDailyResult}
        >
          <Trash2 />
          <span>{isDeleting ? "Eliminando..." : "Eliminar"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DotsButton
