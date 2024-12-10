import { BsThreeDots } from "react-icons/bs"

import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NavLink } from "react-router-dom"

const DotsButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-2xl text-GRAY-200 flex items-center justify-center">
        <BsThreeDots />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <NavLink to="/editar-resultados">Editar</NavLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DotsButton
