import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
} from "@/shared/components/ui/table";
import Icon from "@/shared/components/ui/icon";
import Button from "@/shared/components/ui/lottary-button";
import { GetAllAgenciesResponse } from "../api";
import { handleFormError } from "@/lib/error";
import { toast } from "sonner";
import { useDeleteAgency } from "../hooks/mutation";
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
import REMOVE_WARNING_MESSAGE from "@/app/constants/remove-warning-message";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import UPDATE_WARNING_MESSAGE from "@/app/constants/update-warning-messge";
import UpdateAgencyForm from "./form/update-agency-form";

type Props = {
  data: GetAllAgenciesResponse["data"];
};

export default function AgencyTable({ data }: Props) {
  const { mutateAsync, isPending } = useDeleteAgency();

  const handleDeleteAgency = (id: string) => {
    try {
      mutateAsync(id);
      toast.success("Removido com sucesso");
    } catch (error) {
      handleFormError(error);
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell className="w-[140px] md:w-fit">Nome</TableCell>
          <TableCell className="hidden md:table-cell">Localização</TableCell>
          <TableCell className="hidden md:table-cell md:w-fit">
            Tipo de agência
          </TableCell>
          <TableCell className="hidden md:table-cell md:w-fit">
            Número
          </TableCell>
          <TableCell className="w-[100px] md:w-fit">Ações</TableCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((agency, i) => (
          <TableRow key={i}>
            <TableCell>{agency.name}</TableCell>
            <TableCell className="hidden md:table-cell">
              {agency.location_text}
            </TableCell>
            <TableCell className="hidden md:table-cell capitalize">
              {agency.type.includes("-")
                ? agency.type.replace("-", " ")
                : agency.type}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {agency.phone}
            </TableCell>
            <TableCell className="flex items-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="gray">
                    <Icon className="md:size-[14px]" name="pen" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{UPDATE_WARNING_MESSAGE.TITLE}</DialogTitle>
                    <DialogDescription>
                      {UPDATE_WARNING_MESSAGE.DESCRIPTION}
                    </DialogDescription>
                  </DialogHeader>
                  <UpdateAgencyForm data={agency} />
                </DialogContent>
              </Dialog>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="red">
                    <Icon className="md:size-[14px]" name="trash" />
                  </Button>
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
                    <AlertDialogCancel className="">Cancelar</AlertDialogCancel>

                    <AlertDialogAction
                      disabled={isPending}
                      onClick={() => handleDeleteAgency(agency.id)}
                      className="bg-LT-RED-200"
                    >
                      {isPending ? "Removendo..." : "Remover"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Button variant="gray">
                <Icon className="md:size-[14px]" name="eye" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
