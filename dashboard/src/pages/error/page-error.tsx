import { IMAGE } from "@/assets";
import Button from "@/shared/components/ui/lottary-button";

export default function PageError() {
  const handleTryAgain = () => window.location.reload();

  return (
    <main className="main flex bg-LT-RED-100 items-center flex-col gap-[50px] justify-center w-full h-screen">
      <img
        src={IMAGE.logo}
        alt="logotipo"
        className="w-[200px] h-[120px] object-contain"
      />
      <header className="flex flex-col gap-4 items-center justify-center text-white">
        <h1 className="font-bold text-2xl">Algo deu errado!</h1>
        <p className="lg:text-justify text-center">
          Encontramos um problema inesperado ao processar sua solicitação. Tente
          novamente mais tarde ou entre em contato com o suporte se o erro
          persistir.
        </p>
        <Button className="px-8 bg-white text-black" onClick={handleTryAgain}>
          Tentar novamente
        </Button>
      </header>
    </main>
  );
}
