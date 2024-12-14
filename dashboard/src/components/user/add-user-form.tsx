import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { isAxiosError } from "axios"
import { Plus } from "lucide-react"
import { Button } from "../ui/button"
import { toast } from "react-toastify"
import { FormEvent, useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select"
import { createUser } from "@/api/user.api"

type UserProps = {
  email: string
  firstName: string
  lastName: string
  password: string
}

const AddUserForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<UserProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await createUser(user)
      console.log(user)
      toast.success(response.message)
    } catch (error) {
      if (isAxiosError(error)) {
        if (!error?.response) {
          return toast.error(TRY_LATER_ERROR)
        }
        return toast.error(error.response.data.message)
      }
      return toast.error(SERVER_CONNECTION_ERROR)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild className="self-end bg-YELLOW">
        <Button>
          <Plus />
          Adicionar
        </Button>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Label htmlFor="name" className="flex flex-col gap-2">
            Nome
            <Input
              id="name"
              type="text"
              value={user.firstName}
              placeholder="John"
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </Label>
          <Label htmlFor="lastName" className="flex flex-col gap-2">
            Sobrenome
            <Input
              id="lastName"
              type="text"
              value={user.lastName}
              placeholder="Doe"
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </Label>
          <Label htmlFor="email" className="flex flex-col gap-2">
            Email
            <Input
              id="email"
              type="email"
              value={user.email}
              placeholder="johndoe@example.com"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Label>
          <Label htmlFor="password" className="flex flex-col gap-2">
            Palavra-passe
            <Input
              id="password"
              type="password"
              value={user.password}
              placeholder="johndoe@example.com"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Label>
          <Label className="flex flex-col gap-2">
            Função
            <Select>
              <SelectTrigger>Escolher</SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
              </SelectContent>
            </Select>
          </Label>
          <Button disabled={isLoading} type="submit" className="bg-RED-200">
            {isLoading ? "Salvando..." : "Salvar"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddUserForm
