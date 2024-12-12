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
import { Button } from "../ui/button"
import { toast } from "react-toastify"
import { IAgency } from "@/interfaces"
import { PlusIcon } from "lucide-react"
import { ICON } from "@/constants/assets"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { deleteAgency, getAgencies } from "@/api/agency.api"
import NothingToShow from "@/components/common/nothing-to-show"
import { isAxiosError } from "axios"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"

const AgencyTable = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isRemoving, setIsRemoving] = useState(false)
  const [agencies, setAgencies] = useState<IAgency[]>([])

  useEffect(() => {
    const fetch = async () => {
      const data = await getAgencies()
      setAgencies(data)
      setIsLoading(false)
    }
    fetch()
  }, [])

  if (isLoading) return <span>Carregando...</span>
  if (agencies.length === 0) return <NothingToShow />

  const handleDeleteAgency = async (id: string) => {
    setIsRemoving(true)
    try {
      const response = await deleteAgency(id)
      toast.success(response.message)
    } catch (error) {
      if (isAxiosError(error)) {
        return toast.error(error.response?.data.message)
      }
      if (isAxiosError(error) && !error.response) {
        return toast.error(TRY_LATER_ERROR)
      }
      return toast.error(SERVER_CONNECTION_ERROR)
    } finally {
      setIsRemoving(false)
      window.location.reload()
    }
  }

  return (
    <div className="bg-white p-4 rounded-[20px] w-[1128px] flex flex-col gap-4">
      <div className="w-full flex items-center justify-end">
        <Button asChild className="bg-yellow-500">
          <NavLink to={"/adicionar-agencia"} className="flex items-center">
            <PlusIcon />
            Agência
          </NavLink>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Localização</TableHead>
            <TableHead>Número</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {agencies?.map((agency) => (
            <TableRow key={agency.id}>
              <TableCell>{agency.name}</TableCell>
              <TableCell>{agency.location_text}</TableCell>
              <TableCell>{agency.phone}</TableCell>
              <TableCell className="flex items-center gap-2">
                <Button asChild className="text-white cursor-pointer bg-GRAY-200 h-8 px-2">
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
                    <Button asChild className="text-white cursor-pointer bg-RED-200 h-8 px-2">
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
