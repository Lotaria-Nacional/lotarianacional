import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/shared/components/ui/table"
import { Button } from "@/shared/components/ui/button"
import { Trash } from "lucide-react"
import { useFetchPartnerJobOppenings } from "../hooks/partner/use-fetch-many-partner-job-oppenings"
import { useDeletePartnerJobOppening } from "../hooks/partner/use-delete-partner-job-oppening"
import UpdatePartnerOppening from "../components/update-partner-oppening"

export default function PartnerOppeningPage() {
  const data = useFetchPartnerJobOppenings()
  const deleteHook = useDeletePartnerJobOppening()

  const handleDelete = async (id: string) => await deleteHook.mutateAsync(id)

  if (data.isLoading) {
    return <div>Carregando...</div>
  }

  if (data.isError) {
    return (
      <div>
        Erro ao carregar dados.
        <Button onClick={() => data.refetch()}>Tentar novamente</Button>
      </div>
    )
  }

  if (!data.data?.data.length) {
    return <div>Não há vagas disponíveis.</div>
  }

  const jobs = data.data.data

  return (
    <div>
      <Table className="bg-white">
        <TableHeader className="bg-LT-GRAY-200/20">
          <TableRow>
            <TableHead>Função</TableHead>
            <TableHead>Localização</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.type}</TableCell>
              <TableCell>{job.location}</TableCell>
              <TableCell>{job.quantity}</TableCell>
              <TableCell className="flex items-center gap-2">
                <UpdatePartnerOppening job={job} />
                <Button
                  size={"icon"}
                  disabled={deleteHook.isPending}
                  onClick={() => handleDelete(job.id)}
                  variant={"destructive"}
                >
                  <Trash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
