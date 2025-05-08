import Button from "@/components/ui/lottary-button"
import { useAuth } from "@/context/auth-context"

export default function SettingsPage() {
  const { user } = useAuth()

  return (
    <div className="main w-full h-full">
      <form className="bg-white flex flex-col gap-6 justify-between rounded-card h-auto md:h-full p-6 md:p-[150px] w-full">
        <fieldset className="flex lg:flex-row flex-col items-center gap-6">
          <div className="flex w-full flex-col gap-1">
            <label className="font-semibold">Nome</label>
            <input
              type="text"
              placeholder="John"
              value={user?.name.split(" ")[0]}
              className="border border-LT-GRAY-200 rounded-[8px] px-4 py-3 outline-none"
            />
          </div>

          <div className="flex w-full flex-col gap-1">
            <label className="font-semibold">Sobrenome</label>
            <input
              type="text"
              placeholder="Doe"
              value={user?.name.split(" ")[1]}
              className="border border-LT-GRAY-200 rounded-[8px] px-4 py-3 outline-none"
            />
          </div>
        </fieldset>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold">Email</label>
          <input
            type="text"
            placeholder="johndoe@lotarianacional.co.ao"
            value={user?.email}
            className="border border-LT-GRAY-200 rounded-[8px] px-4 py-3 outline-none"
          />
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold">Função</label>

          <select
            defaultValue={user?.role}
            className="border border-LT-GRAY-200 rounded-[8px] px-4 py-[12px] outline-none"
          >
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="studio">Studio</option>
          </select>
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold">Foto de perfil</label>
          <input
            type="file"
            className="border border-LT-GRAY-200 rounded-[8px] px-4 py-3 outline-none"
          />
        </div>
        <Button className="w-full mt-4">Salvar alterações</Button>
      </form>
    </div>
  )
}
