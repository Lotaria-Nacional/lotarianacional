import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { ICON } from "@/constants/assets"

const NotificationButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img
          src={ICON.bell}
          alt="sino ícone"
          className="object-contain aspect-square cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="py-6 px-4">Não há nada a mostrar.</div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NotificationButton
