import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { NavLink } from "react-router-dom"
import { FormEvent, useState } from "react"
import { useAuth } from "@/context/authContext"

type Credentials = {
  email: string
  password: string
}

const LoginForm = () => {
  const { login, isLoading } = useAuth()
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await login(credentials.email, credentials.password)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-[562px] w-full h-[540px] md:h-[595px] px-14 lg:px-0 bg-white rounded-[10px] flex flex-col justify-start items-center"
    >
      <div className="relative w-[170px] h-[120px] mt-20">
        <img
          alt="logotipo"
          src="logo/logo-vermelho.svg"
          className="absolute inset-0  w-full h-full object-container"
        />
      </div>
      <section className="w-full lg:w-[350px] items-center mt-6 flex flex-col">
        <Label htmlFor="email" className="space-y-2 w-full">
          <span className="text-zinc-500">Email</span>
          <Input
            id="email"
            type="email"
            placeholder="user@example.com"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            className="placeholder:text-zinc-400"
          />
        </Label>
        <Label htmlFor="email" className="space-y-2 w-full mt-6">
          <span className="text-zinc-500">Palavra-passe</span>
          <Input
            id="password"
            type="password"
            placeholder="*********"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="placeholder:text-zinc-400 "
          />
        </Label>
        <div className="w-full mt-3 flex-wrap gap-4 flex items-center justify-between">
          <Label
            htmlFor="remember"
            className="text-xs flex flex-row items-center gap-1 text-zinc-500"
          >
            <Input id="remember" type="checkbox" className="size-4" />
            Lembrar
          </Label>
          <NavLink to={"#"} className="text-xs text-zinc-500">
            Esqueceu a sua palavra-passe?
          </NavLink>
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-RED-200 mt-8 w-full"
        >
          {isLoading ? "Entrando..." : "Entrar"}
        </Button>
      </section>
    </form>
  )
}

export default LoginForm
