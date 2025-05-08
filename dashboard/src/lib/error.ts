import { isAxiosError } from "axios"
import { toast } from "sonner"

export function handleFormError(error: unknown) {
  if (isAxiosError(error)) {
    return toast.error(error.response?.data.message)
  }
  if (isAxiosError(error) && !error.response) {
    return toast.error("Tente mais tarde")
  }
  return toast.error("Erro interno no servidor")
}
