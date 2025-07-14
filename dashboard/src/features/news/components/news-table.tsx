import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
} from "@/shared/components/ui/table";
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
import { toast } from "sonner";
import { GetAllNewsResponse } from "../api";
import { handleFormError } from "@/lib/error";
import { useNavigate } from "react-router-dom";
import { Eye, Pen, Trash } from "lucide-react";
import { useDeleteNews } from "../hooks/mutation";
import Button from "@/shared/components/ui/lottary-button";
import REMOVE_WARNING_MESSAGE from "@/app/constants/remove-warning-message";

type Props = {
  data: GetAllNewsResponse;
};

export default function NewsTable({ data }: Props) {
  const { mutateAsync, isPending } = useDeleteNews();
  const navigate = useNavigate();

  const navigateToUpdatePage = (id: string) =>
    navigate(`/noticias/atualizar/${id}`);

  const handleDeleteNews = async (id: string) => {
    try {
      const response = await mutateAsync(id);
      toast.success(response.message);
    } catch (error) {
      handleFormError(error);
    }
  };
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell className="hidden md:table-cell">Imagem</TableCell>
          <TableCell className="w-fit">Título</TableCell>
          <TableCell className="hidden md:table-cell">Data</TableCell>
          <TableCell className="w-fit">Ações</TableCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.data.map((news) => (
          <TableRow key={news.id}>
            <TableCell className="hidden md:table-cell">
              <img
                src={news.image}
                alt={news.title}
                className="rounded-md size-[50px]"
              />
            </TableCell>
            <TableCell>{news.title}</TableCell>
            <TableCell className="hidden md:table-cell">
              {news.createdAt.split("T")[0].split("-").reverse().join("-")}
            </TableCell>
            <TableCell className="flex items-center gap-2">
              <Button
                variant="gray"
                onClick={() => navigateToUpdatePage(news.id)}
              >
                <Pen size={14} />
              </Button>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="red">
                    <Trash size={14} />
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
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>

                    <AlertDialogAction
                      className="bg-LT-RED-200 text-white w-full lg:w-fit"
                      asChild
                    >
                      <Button
                        disabled={isPending}
                        onClick={() => handleDeleteNews(news.id)}
                      >
                        {isPending ? "Removendo..." : "Remover"}
                      </Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Button variant="gray">
                <Eye size={14} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
