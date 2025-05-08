import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { IMAGE } from "@/assets"
import { UserEntity } from "../types"
import { Eye, Pen, Trash } from "lucide-react"
import Button from "@/components/ui/lottary-button"
import UpdateUserForm from "./form/update-user-form"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import REMOVE_WARNING_MESSAGE from "@/constants/remove-warning-message"
import { useRemoveUser } from "../hooks/mutation"
import { handleFormError } from "@/lib/error"
import { toast } from "sonner"
import { PartialUserEntity } from "../types/partial-user"

type Props = {
  data: UserEntity[]
}

export default function UsersTable({ data }: Props) {
  const { mutateAsync, isPending } = useRemoveUser()

  const handleRemoveUser = async (id: string) => {
    try {
      const response = await mutateAsync(id)
      toast.success(response.message)
    } catch (error) {
      handleFormError(error)
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell className="hidden md:table-cell">Imagem</TableCell>
          <TableCell className="w-full lg:w-fit">Nome</TableCell>
          <TableCell className="w-fit hidden md:table-cell">
            Sobrenome
          </TableCell>
          <TableCell className="hidden md:table-cell">Email</TableCell>
          <TableCell className="hidden md:table-cell">Role</TableCell>
          <TableCell className="w-fit md:w-fit">Ações</TableCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="hidden md:table-cell">
              <img
                alt={`Imagem de ${user.firstName}`}
                src={(user.profilePic as string) || IMAGE.USER}
                className="size-[24px] object-contain"
              />
            </TableCell>
            <TableCell>{user.firstName}</TableCell>
            <TableCell className="hidden md:table-cell">
              {user.lastName}
            </TableCell>
            <TableCell className="hidden md:table-cell">{user.email}</TableCell>
            <TableCell className="hidden md:table-cell">{user.role}</TableCell>

            <TableCell className="flex items-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="gray">
                    <Pen size={14} />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Editar os dados do usuário.</DialogTitle>
                    <DialogDescription>
                      Editar os dados do usuário.
                    </DialogDescription>
                  </DialogHeader>
                  <UpdateUserForm data={user as PartialUserEntity} />
                </DialogContent>
              </Dialog>

              <Button variant="red">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Trash size={14} />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        {REMOVE_WARNING_MESSAGE.TITLE}
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        {REMOVE_WARNING_MESSAGE.DESCRIPTION}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction
                        disabled={isPending}
                        onClick={() => handleRemoveUser(user.id)}
                        className="bg-LT-RED-200 text-white"
                      >
                        {isPending ? "Removendo..." : "Remover"}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </Button>
              <Button variant="gray">
                <Eye size={14} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
