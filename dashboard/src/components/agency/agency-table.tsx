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
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog"
import { useState } from "react"
import { isAxiosError } from "axios"
import { Button } from "../ui/button"
import { toast } from "react-toastify"
import { ICON } from "@/constants/assets"
import { NavLink } from "react-router-dom"
import { deleteAgency } from "@/api/agency.api"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"
import { IAgency } from "@/interfaces"

type Props = {
  agencies: IAgency[]
}
const AgencyTable = ({ agencies }: Props) => {
  const [isRemoving, setIsRemoving] = useState(false)
  const handleDeleteAgency = async (id: string) => {
    setIsRemoving(true)
    try {
      const response = await deleteAgency(id)
      toast.success(response.message)
    } catch (error) {
      if (isAxiosError(error)) {
        if (!error.response) {
          return toast.error(TRY_LATER_ERROR)
        }
        return toast.error(error.response?.data.message)
      }
      return toast.error(SERVER_CONNECTION_ERROR)
    } finally {
      setIsRemoving(false)
      window.location.reload()
    }
  }

  return (
    <div className="p-4 rounded-[20px] w-[1128px] flex flex-col gap-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Localização</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Número</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {agencies?.map((agency) => (
            <TableRow key={agency.id}>
              <TableCell>{agency.name}</TableCell>
              <TableCell>{agency.location_text}</TableCell>
              <TableCell>{agency.type}</TableCell>
              <TableCell>{agency.phone}</TableCell>
              <TableCell className="flex items-center gap-2">
                <Button
                  asChild
                  className="text-white cursor-pointer bg-GRAY-200 h-8 px-2"
                >
                  <NavLink to={`/agencia/${agency.id}`}>
                    <img
                      alt="ícone"
                      src={ICON.edit}
                      className="object-contain w-4"
                    />
                  </NavLink>
                </Button>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      asChild
                      className="text-white cursor-pointer bg-RED-200 h-8 px-2"
                    >
                      <div>
                        <img
                          alt="ícone"
                          src={ICON.trash}
                          className="object-contain w-4"
                        />
                      </div>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Tens a certeza que pretendes remover esta notícia?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Esta ação não pode ser desfeita. A notícia será
                        permanentemente removida do sistema.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction
                        disabled={isRemoving}
                        className="bg-RED-200"
                        onClick={() => handleDeleteAgency(agency.id)}
                      >
                        {isRemoving ? "Removendo..." : "Remover"}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AgencyTable
