import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { IUser } from "@/interfaces"
import { isAxiosError } from "axios"
import { toast } from "react-toastify"
import { ICON } from "@/constants/assets"
import { useEffect, useState } from "react"
import { UserCircle2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { deleteUser, getUsers } from "@/api/user.api"
import AddUserForm from "@/components/user/add-user-form"
import EditUserForm from "@/components/user/edit-user-form"
import { AlertDialogAction } from "@radix-ui/react-alert-dialog"
import UserTableSkeleton from "@/components/skeletons/user-table-skeleton"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const UsersPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState<IUser[] | []>([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getUsers()
        setUsers(response)
      } catch (error) {
        if (isAxiosError(error)) {
          if (!error.response) {
            return toast.error(TRY_LATER_ERROR)
          }
          return toast.error(error.response.data.message)
        }
        return toast.error(SERVER_CONNECTION_ERROR)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  const handleDeleteUser = async (id: string) => {
    try {
      const response = await deleteUser(id)
      toast.success(response.message)
      window.location.reload()
    } catch (error) {
      if (isAxiosError(error)) {
        if (!error?.response) {
          return toast.error(TRY_LATER_ERROR)
        }
        return toast.error(error.response.data.message)
      }
      return toast.error(SERVER_CONNECTION_ERROR)
    }
  }

  if (isLoading) return <UserTableSkeleton />

  return (
    <main className="w-full flex items-center justify-center">
      <div className="bg-white p-4 w-[1128px] rounded-[20px] flex flex-col gap-4">
        <AddUserForm />
        {users.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Sobrenome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Função</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <UserCircle2Icon />
                  </TableCell>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>

                  <TableCell className="flex flex-row gap-2 items-center">
                    <Dialog>
                      <DialogTrigger
                        asChild
                        className="h-8 w-8 p-[2px] rounded-[3px] bg-GRAY-200 cursor-pointer"
                      >
                        <img
                          src={ICON.edit}
                          className="object-contain h-8 w-8 p-[2px] rounded-[3px]"
                        />
                      </DialogTrigger>
                      <DialogContent>
                        <EditUserForm user={user} />
                      </DialogContent>
                    </Dialog>
                    <AlertDialog>
                      <AlertDialogTrigger
                        asChild
                        className="bg-RED-200 h-8 w-8 p-[2px] rounded-[3px] cursor-pointer"
                      >
                        <img
                          src={ICON.trash}
                          className="h-8 w-8 object-contain"
                        />
                      </AlertDialogTrigger>

                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Tens a certeza que pretendes eliminar este usuário?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Ao realizar esta ação os dados serão permanentemente
                            removidos. Tem a certeza que pretende continuar?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction
                            asChild
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <Button className="bg-RED-200">Remover</Button>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <span className="text-center">Não há nada ainda.</span>
        )}
      </div>
    </main>
  )
}

export default UsersPage
