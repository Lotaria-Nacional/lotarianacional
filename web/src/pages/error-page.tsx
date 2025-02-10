import LinkButton from "@/components/ui/button/link-button"

const ErrorPage = () => {
  return (
    <main className="w-full bg-LT_RED-200 h-screen flex items-center justify-center">
      <div className="flex  flex-col gap-8 items-center justify-center">
        <img src="/logo/logo.webp" className="w-[200px]" alt="Logotipo" />
        <div className="flex flex-col items-center justify-center w-full mt-10 gap-10">
          <h1 className="text-2xl text-center text-white">
            Opps!... Ocorreu um erro desconhecido.
          </h1>
          <LinkButton link="/" variant="default" className="py-3 font-medium">
            Voltar à página inicial
          </LinkButton>
        </div>
      </div>
    </main>
  )
}

export default ErrorPage
