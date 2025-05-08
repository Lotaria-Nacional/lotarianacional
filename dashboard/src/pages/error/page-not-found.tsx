import { IMAGE } from "@/assets"
import { useNavigate } from "react-router-dom"
import Button from "@/components/ui/lottary-button"

export default function PageNotFound() {
  const navigate = useNavigate()

  const handleGoBack = () => navigate("/")

  return (
    <main className="main flex bg-LT-RED-100 items-center flex-col gap-[50px] justify-center w-full h-screen">
      <img
        src={IMAGE.logo}
        alt="logotipo"
        className="w-[200px] h-[120px] object-contain"
      />
      <header className="flex flex-col gap-4 items-center justify-center text-white">
        <h1 className="font-bold text-2xl">Ops! Página não encontrada</h1>
        <p className="lg:text-justify text-center">
          Parece que você tomou um desvio errado. A página que procura não
          existe ou foi movida. Volte para a página inicial ou tente outra rota.
        </p>
        <Button className="px-8 bg-white text-black" onClick={handleGoBack}>
          Voltar
        </Button>
      </header>
    </main>
  )
}
