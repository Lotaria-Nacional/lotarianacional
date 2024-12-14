import { isAxiosError } from "axios"
import { toast } from "react-toastify"
import { FormEvent, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"

type UserInputData = {
  name: string
  email: string
  password: string
}

const SettingsPage = () => {
  const [userData, setUserData] = useState<UserInputData>({
    email: "",
    name: "",
    password: "",
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      console.log(userData)
      toast.success("Atualizado com sucesso")
    } catch (error) {
      if (isAxiosError(error)) {
        if (error?.response) {
          return toast.error(TRY_LATER_ERROR)
        }
        return toast.error(error.message)
      }
      return toast.error(SERVER_CONNECTION_ERROR)
    }
  }

  return (
    <main className="w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[552px] bg-white rounded-[20px] p-10 lg:p-24 flex flex-col gap-8"
      >
        <Label className="flex flex-col gap-3" htmlFor="name">
          Nome do usuário
          <Input
            id="name"
            type="text"
            value={userData.name}
            placeholder="Sebastião António"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </Label>
        <Label className="flex flex-col gap-3" htmlFor="email">
          Email
          <Input
            id="email"
            type="email"
            value={userData.email}
            placeholder="sebastiaoantonio@example.com"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </Label>
        <Label className="flex flex-col gap-3" htmlFor="email">
          Palavra-passe
          <Input
            type="password"
            value={userData.password}
            placeholder="#9cjovk+_moa-*"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </Label>
        <Button type="submit" className="bg-RED-200">
          Salvar alterações
        </Button>
      </form>
    </main>
  )
}

export default SettingsPage
