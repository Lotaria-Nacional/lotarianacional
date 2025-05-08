import Button from "@/components/ui/lottary-button"
import { ChangeEvent, FormEvent, useState } from "react"
import { IMAGE } from "@/assets"
import { useUpdateUser } from "../../hooks/mutation"
import { handleFormError } from "@/lib/error"
import { toast } from "sonner"
import { PartialUserEntity } from "../../types/partial-user"

type Props = {
  data: PartialUserEntity
}

export default function UpdateUserForm({ data }: Props) {
  const { mutateAsync, isPending } = useUpdateUser()
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const [updateData, setUpdateData] = useState<PartialUserEntity>({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    role: data.role,
  })

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPreviewImage(URL.createObjectURL(file))
      setSelectedFile(file)
    }
  }

  const handleUpdateUser = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append("firstName", updateData.firstName as string)
      formData.append("lastName", updateData.lastName as string)
      formData.append("email", updateData.email as string)
      formData.append("role", updateData.role as string)

      if (selectedFile) {
        formData.append("image", selectedFile as File)
      }

      const response = await mutateAsync({ id: data.id!, data: formData })
      toast.success(response.message)
    } catch (error) {
      handleFormError(error)
    }
  }

  return (
    <form onSubmit={handleUpdateUser} className="flex flex-col gap-4 w-full">
      <div className="flex lg:flex-row flex-col items-center gap-6 w-full">
        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold">Nome</label>
          <input
            type="text"
            value={updateData.firstName}
            onChange={(e) =>
              setUpdateData({ ...updateData, firstName: e.target.value })
            }
            className="border border-LT-GRAY-200 rounded-[8px] px-4 py-2 outline-none"
          />
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold">Sobrenome</label>
          <input
            type="text"
            value={updateData.lastName}
            onChange={(e) =>
              setUpdateData({ ...updateData, lastName: e.target.value })
            }
            className="border border-LT-GRAY-200 rounded-[8px] px-4 py-2 outline-none"
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-1">
        <label className="font-semibold">Email</label>
        <input
          type="email"
          value={updateData.email}
          onChange={(e) =>
            setUpdateData({ ...updateData, email: e.target.value })
          }
          className="border border-LT-GRAY-200 rounded-[8px] px-4 py-2 outline-none"
        />
      </div>

      <div className="flex w-full flex-col gap-1">
        <label className="font-semibold">Função</label>
        <select
          defaultValue={updateData.role}
          onChange={(e) =>
            setUpdateData({ ...updateData, role: e.target.value })
          }
          className="border border-LT-GRAY-200 rounded-[8px] px-4 py-[8px] outline-none"
        >
          <option value="lotaria-nacional">Admin</option>
          <option value="elephant-bet">Editor</option>
          <option value="arreiou">Studio</option>
        </select>
      </div>

      <div className="w-full hidden flex-col gap-1">
        <label className="font-semibold">Foto de perfil</label>
        <img
          className="size-[48px] rounded-full"
          alt={`Imagem de perfil de ${updateData.firstName}`}
          src={
            previewImage
              ? previewImage
              : updateData.profilePic
              ? (updateData.profilePic as string)
              : IMAGE.USER
          }
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleChangeImage}
          className="lg:w-full w-full max-w-[200px] border border-LT-GRAY-200 rounded-[8px] px-4 py-2 outline-none"
        />
      </div>

      <Button disabled={isPending} className="w-full mt-4">
        {isPending ? "Salvando..." : "Salvar"}
      </Button>
    </form>
  )
}
