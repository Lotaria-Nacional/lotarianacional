import { IMAGE } from "@/assets"

export default function PageFallback() {
  return (
    <main className="w-full h-screen bg-LT-RED-200 flex items-center justify-center">
      <img
        src={IMAGE.logo}
        alt="Logotipo"
        className="lg:w-[140px] w-[200px] animate-up-down object-contain"
      />
    </main>
  )
}
