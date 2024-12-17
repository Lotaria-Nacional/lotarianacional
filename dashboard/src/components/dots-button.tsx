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
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      const data = await getLastDailyResult()
      console.log(data.id)
      setId(data.id)
      setIsLoading(false)
    }
    fetch()
  }, [])

  const handleDeleteDailyResult = async () => {
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
          disabled={isLoading}
          onClick={handleDeleteDailyResult}
        >
          <Trash2 />
          <span>{isLoading ? "Eliminando..." : "Eliminar"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DotsButton
