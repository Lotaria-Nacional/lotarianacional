import { useAuth } from "@/context/authContext"
import { Button } from "../ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog"

const LogoutButton = () => {
  const { logout, isLoading } = useAuth()

  const handleLogout = async () => {
    logout()
    window.location.reload()
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="text-RED-200 bg-white w-full hidden lg:block">
          Sair
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Tens a certeza que pretendes terminar a sessão?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button className="text-black">Cancelar</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              disabled={isLoading}
              onClick={handleLogout}
              className="bg-RED-200"
            >
              {isLoading ? "Saindo..." : "Confirmar"}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default LogoutButton
