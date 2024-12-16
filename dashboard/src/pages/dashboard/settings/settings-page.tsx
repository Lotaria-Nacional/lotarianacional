import { isAxiosError } from "axios"
import { toast } from "react-toastify"
import { FormEvent, useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"
import { getUser, updateUser } from "@/api/user.api"
import { useAuth } from "@/context/authContext"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"

import SettingFormSkeleton from "@/components/skeletons/setting-form-skeleton"

type UserInputData = {
  firstName: string
  lastName: string
  email: string
  role: string
}

const SettingsPage = () => {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)
  const [userData, setUserData] = useState<UserInputData>({
    email: "",
    firstName: "",
    lastName: "",
    role: "",
  })

  useEffect(() => {
    const fetch = async () => {
      try {
        if (user) {
          const response = await getUser(user.id)
          setUserData({
            email: response.email,
            role: response.role,
            firstName: response.firstName,
            lastName: response.lastName,
          })
        }
      } catch (error) {
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)
    try {
      const data = {
        ...userData,
        id: user!.id,
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
      setIsUpdating(false)
    }
  }

  if (isLoading) return <SettingFormSkeleton />

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
            value={userData.firstName}
            placeholder="John"
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
          />
        </Label>
        <Label className="flex flex-col gap-3" htmlFor="name">
          Sobrenome
          <Input
            id="name"
            type="text"
            value={userData.lastName}
            placeholder="Doe"
            onChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
          />
        </Label>
        <Label className="flex flex-col gap-3" htmlFor="email">
          Email
          <Input
            id="email"
            type="email"
            value={userData.email}
            placeholder="johndoe@example.com"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </Label>
        <Label className="flex flex-col gap-3" htmlFor="email">
          Função
          <Select
            defaultValue={userData.role}
            onValueChange={(value) => setUserData({ ...userData, role: value })}
          >
            <SelectTrigger>{userData.role}</SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="editor">Editor</SelectItem>
            </SelectContent>
          </Select>
        </Label>
        <Button disabled={isUpdating} type="submit" className="bg-RED-200">
          {isUpdating ? "Salvando..." : "Salvar alterações"}
        </Button>
      </form>
    </main>
  )
}

export default SettingsPage
