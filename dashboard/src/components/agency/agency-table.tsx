import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IAgency } from "@/interfaces"
import { useEffect, useState } from "react"
import { getAgencies } from "@/api/agency.api"
import NothingToShow from "@/components/common/nothing-to-show"
import { Button } from "../ui/button"
import { NavLink } from "react-router-dom"
import {   PlusIcon, Trash2 } from "lucide-react"
import { ICON } from "@/constants/assets"
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

const AgencyTable = () => {
  const [isLoading, setIsLoading] = useState(true)
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
              {/* <TableCell>{agency.phone}</TableCell> */}
              <TableCell>+123456789</TableCell>
              <TableCell className="flex items-center gap-2">
                <Button asChild>
                  <NavLink to={"#"} className="text-white bg-GRAY-200">
                    <img
                      alt="ícone"
                      src={ICON.edit}
                      className="object-contain w-4"
                    />
                  </NavLink>
                </Button>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button asChild className="bg-RED-200">
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
                      <AlertDialogAction>Remover</AlertDialogAction>
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
