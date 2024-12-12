import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

import {
  AlertDialogTitle,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogDescription,
} from "../ui/alert-dialog"
import { isAxiosError } from "axios"
import { Button } from "../ui/button"
import { toast } from "react-toastify"
import { ICON } from "@/constants/assets"
import { NavLink } from "react-router-dom"
import { deleteNews } from "@/api/news.api"
import { INews } from "@/interfaces"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"

type Props = {
  news: INews[]
}

const NewsTable = ({ news }: Props) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDeleteNews = async (id: string) => {
    try {
      setIsDeleting(true)
      const response = await deleteNews(id)
      toast.success(response.message)
      window.location.reload()
    } catch (error) {
      if (isAxiosError(error)) {
        return toast.error(error.response?.data.message)
      }
      if (isAxiosError(error) && !error.response) {
        return toast.error(SERVER_CONNECTION_ERROR)
      }
      return toast.error(TRY_LATER_ERROR)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Imagem</TableHead>
          <TableHead>Título</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {news.map((data) => (
          <TableRow key={data.id}>
            <TableCell>
              <img
                src={data.image}
                className="size-[50px] rounded-[13px]"
                alt=""
              />
            </TableCell>
            <TableCell>{data.title}</TableCell>
            <TableCell>
              {data.createdAt.split("T")[0].split("-").reverse().join("-")}
            </TableCell>
            <TableCell className="flex items-center gap-2">
              <Button className="px-2 h-8 bg-GRAY-200" asChild>
                <NavLink to={`/noticia/${data.id}`}>
                  <img src={ICON.edit} />
                </NavLink>
              </Button>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    className="px-2 bg-RED-200 h-8 cursor-pointer"
                    asChild
                  >
                    <img src={ICON.trash} />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Tens a certeza que prentendes remover esta notícia?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Esta ação não pode ser desfeita. A notícia será
                      permanentemente removida do sistema.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction
                      disabled={isDeleting}
                      className="bg-RED-200"
                      onClick={() => handleDeleteNews(data.id)}
                    >
                      {isDeleting ? "Removendo..." : "Remover"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default NewsTable
