import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { BsThreeDots } from "react-icons/bs"
import { Edit2, Eye, Trash2 } from "lucide-react"
import { IEmission } from "@/interfaces"

type Props = {
  emissions: IEmission[]
}
const EmissionTable = ({ emissions }: Props) => {
  return (
    <div className="p-4 rounded-[20px] w-[1128px] h-full overflow-y-auto flex flex-col gap-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Imagem</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {emissions.map((emission, i) => (
            <TableRow key={emission.id}>
              <TableCell>
                <div className="size-[50px] bg-RED-200" />
              </TableCell>
              <TableCell>{`Emissão - ${1 + i}`}</TableCell>
              <TableCell>{emission.formatedDate}</TableCell>
              <TableCell className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-2xl text-GRAY-200 flex items-center justify-center">
                    <BsThreeDots />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="p-2 space-y-1">
                    <DropdownMenuItem className="cursor-pointer flex gap-1 hover:bg-zinc-50 transition-background duration-200 p-2 rounded-md">
                      <Eye />
                      <span>Ver</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="cursor-pointer flex gap-1 hover:bg-zinc-50 transition-background duration-200 p-2 rounded-md">
                      <Edit2 />
                      <span>Editar</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="text-RED-200p cursor-pointer flex gap-1 hover:bg-zinc-50 transition-background duration-200 p-2 rounded-md">
                      <Trash2 />
                      <span>Apagar</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default EmissionTable
