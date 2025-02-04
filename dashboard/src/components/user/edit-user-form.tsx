import { FormEvent, useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { IUser } from "@/interfaces"
import { toast } from "react-toastify"
import { isAxiosError } from "axios"
import { TRY_LATER_ERROR, SERVER_CONNECTION_ERROR } from "@/constants/error"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select"
import { updateUser } from "@/api/user.api"

type UserData = {
  firstName: string
  lastName: string
  email: string
  role: string
}

type Props = {
  user: IUser
}
const EditUserForm = ({ user }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<UserData>({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      console.log(userData)
      const data = {
        ...userData,
        id: user.id,
      }
      const response = await updateUser(data)
      toast.success(response.message)
    } catch (error) {
      if (isAxiosError(error)) {
        if (!error?.response) {
          return toast.error(TRY_LATER_ERROR)
        }
        return toast.error(error.message)
      }
      return toast.error(SERVER_CONNECTION_ERROR)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Label className="flex flex-col gap-3" htmlFor="name">
        Nome
        <Input
          id="name"
          type="text"
          value={userData.firstName}
          onChange={(e) =>
            setUserData({
              ...userData,
              firstName: e.target.value,
            })
          }
        />
      </Label>
      <Label className="flex flex-col gap-3" htmlFor="lastName">
        Sobrenome
        <Input
          id="lastName"
          type="text"
          value={userData.lastName}
          onChange={(e) =>
            setUserData({
              ...userData,
              lastName: e.target.value,
            })
          }
        />
      </Label>
      <Label className="flex flex-col gap-3" htmlFor="email">
        Email
        <Input
          id="email"
          type="email"
          value={userData.email}
          onChange={(e) =>
            setUserData({
              ...userData,
              email: e.target.value,
            })
          }
        />
      </Label>
      <Label className="flex flex-col gap-3">
        Função
        <Select
          defaultValue={userData.role}
          onValueChange={(value) => setUserData({ ...userData, role: value })}
        >
          <SelectTrigger>{userData.role}</SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">admin</SelectItem>
            <SelectItem value="editor">editor</SelectItem>
            <SelectItem value="editor">studio</SelectItem>
          </SelectContent>
        </Select>
      </Label>
      <Button disabled={isLoading} className="bg-RED-200" type="submit">
        {isLoading ? "Salvando..." : "Salvar alterações"}
      </Button>
    </form>
  )
}

export default EditUserForm
