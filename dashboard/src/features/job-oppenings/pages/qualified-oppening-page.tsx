import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { useFetchJobOppenings } from "../hooks/use-fetch-many-job-oppenings";
import { Button } from "@/shared/components/ui/button";
import { useDeleteJobOppening } from "../hooks/use-delete-job-oppening";
import { Trash } from "lucide-react";
import UpdateQualifiendOppening from "../components/update-qualifiend-oppening";
import EmptyState from "@/shared/components/common/empty-state";
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
} from "@/shared/components/ui/alert-dialog";
import { convertToDate } from "@/shared/utils/convert-date";

export default function QualifiedOppeningPage() {
  const data = useFetchJobOppenings();
  const deleteHook = useDeleteJobOppening();

  const handleDelete = async (id: string) => await deleteHook.mutateAsync(id);

  if (data.isLoading) {
    return <div>Carregando...</div>;
  }

  if (data.isError) {
    return (
      <div>
        Erro ao carregar dados.
        <Button onClick={() => data.refetch()}>Tentar novamente</Button>
      </div>
    );
  }

  if (!data.data?.data.length) {
    return <EmptyState message="Nenhuma vaga disponível" />;
  }

  const jobs = data.data.data;

  return (
    <div>
      <Table className="bg-white">
        <TableHeader className="bg-LT-GRAY-200/20">
          <TableRow>
            <TableHead className="md:w-[400px]">Função</TableHead>
            <TableHead className="md:w-[400px]">Departamento</TableHead>
            <TableHead className="md:w-[400px]">Quantidade</TableHead>
            <TableHead className="md:w-[400px]">Data de criação</TableHead>
            <TableHead className="md:w-[400px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.department}</TableCell>
              <TableCell>{job.quantity}</TableCell>
              <TableCell>{convertToDate(job.createdAt.toString())}</TableCell>
              <TableCell className="flex items-center gap-2">
                <UpdateQualifiendOppening job={job} />
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size={"icon"} variant={"destructive"}>
                      <Trash />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Tens a certeza que pretendes eliminar esta vaga?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Esta ação não é reversível
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction
                        disabled={deleteHook.isPending}
                        onClick={() => handleDelete(job.id)}
                      >
                        Remover
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
  );
}
