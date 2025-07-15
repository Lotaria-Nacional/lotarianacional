import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/shared/components/ui/table";
import { Button } from "@/shared/components/ui/button";
import { Trash } from "lucide-react";
import { useFetchPartnerJobOppenings } from "../hooks/partner/use-fetch-many-partner-job-oppenings";
import { useDeletePartnerJobOppening } from "../hooks/partner/use-delete-partner-job-oppening";
import UpdatePartnerOppening from "../components/update-partner-oppening";
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

export default function PartnerOppeningPage() {
  const data = useFetchPartnerJobOppenings();
  const deleteHook = useDeletePartnerJobOppening();

  const handleDelete = async (id: string) => await deleteHook.mutateAsync(id);

  if (data.isLoading) {
    <div>Carregando...</div>;
  }

  if (data.error) {
    return (
      <div>
        <button onClick={() => data.refetch()}>Tentar novamente</button>
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
            <TableHead className="w-[400px]">Função</TableHead>
            <TableHead className="w-[400px]">Localização</TableHead>
            <TableHead className="w-[400px]">Tipo</TableHead>
            <TableHead className="w-[400px]">Quantidade</TableHead>
            <TableHead className="w-[400px]">Data de criação</TableHead>
            <TableHead className="w-[400px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.location}</TableCell>
              <TableCell>{job.type}</TableCell>
              <TableCell>{job.quantity}</TableCell>
              <TableCell>{convertToDate(job.createdAt.toString())}</TableCell>
              <TableCell className="flex items-center gap-2">
                <UpdatePartnerOppening job={job} />
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      size={"icon"}
                      disabled={deleteHook.isPending}
                      variant={"destructive"}
                    >
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
