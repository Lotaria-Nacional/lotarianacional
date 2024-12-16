import { LOGOS } from "@/constants/assets"
import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"

const NotFoundPage = () => {
  return (
    <main className="w-full min-h-screen bg-RED-200 flex items-center justify-center">
      <div className="bg-white rounded-[20px] p-24 flex items-center gap-8 justify-center flex-col">
        <img
          alt="logotipo"
          src={LOGOS.red_logo}
          className="w-full h-[60px] object-contain"
        />
        <h1 className="text-4xl font-bold">Página não encontrada.</h1>
        <Button asChild className="bg-RED-200">
          <NavLink to="/">Voltar à página incial</NavLink>
        </Button>
      </div>
    </main>
  )
}

export default NotFoundPage
