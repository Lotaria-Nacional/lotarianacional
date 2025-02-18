import { saveAs } from "file-saver"
import { toPng } from "html-to-image"
import { IResult } from "@/interfaces"
import { toast } from "react-toastify"
import { useRef, useState } from "react"
import { BsDownload } from "react-icons/bs"

type Props = {
  result: IResult
}

const DownloadResultCard = ({ result }: Props) => {
  const divRef = useRef<HTMLDivElement | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const resultDate = result.createdAt
    .toString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join("/")

  const numbers = [
    result.number_1,
    result.number_2,
    result.number_3,
    result.number_4,
    result.number_5,
  ]

  const handleDownloadResult = async () => {
    setIsLoading(true)
    if (!divRef.current) return
    try {
      const dataURL = await toPng(divRef.current, {
        quality: 1,
        width: 1081,
        height: 1350,
      })
      saveAs(dataURL, "resultado.png")
      toast.success("Download feito com sucesso.")
    } catch (error) {
      toast.error("Erro ao fazer o download.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <button
        disabled={isLoading}
        onClick={handleDownloadResult}
        className="self-end bg-white px-4 py-1 flex items-center gap-2 hover:bg-white/60 transition-all ease duration-200 rounded-md"
      >
        <span>{isLoading ? "Baixando..." : "Baixar"}</span>
        <BsDownload />
      </button>
      <div
        ref={divRef}
        className="bg-blue-500 w-[337.43px] h-[421.4px] ticket-background justify-between flex flex-col"
      >
        <div className="w-full flex justify-end p-4">
          <img src="/18.webp" width={34.12} height={34.12} />
        </div>
        <div className="flex items-center justify-center w-full -mt-4">
          <img src="/loto.webp" width={159.82} height={63.05} />
        </div>
        <div className="flex w-[204.52px] h-[101.42px] mx-auto flex-col items-center mt-1 justify-center -rotate-[9.1deg]">
          <span className="text-white text-[22.39px]">SORTEIO</span>
          <h1 className="text-yellow-400 text-[40px] -mt-4 edo-Sz">
            {result.name}!
          </h1>
        </div>

        <div className="mt-2 self-center">
          <div className="relative result-ticket-background w-[232.86px] h-[121.84px] flex flex-col items-center justify-center">
            <div className="mb-[50px] text-[10px] flex flex-col items-center text-white uppercase">
              <h4 className="font-normal">
                {resultDate}
                <span className="text-yellow-400 ml-1 text-[11px]">
                  {result.hour.replace(/h/, ":")}
                </span>
              </h4>
              <span className="font-normal">Números sorteados</span>
            </div>

            <div className="absolute bottom-6 left-6 w-full flex items-center gap-1">
              {numbers.map((number, i) => (
                <span
                  key={i}
                  className="bg-white rounded-full size-[33.24px] flex items-center justify-center text-center text-[22.16px] text-RED-100"
                >
                  {number}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-between p-4">
          <img src="/images.webp" width={85.85} height={33.3} />
          <img src="/elephant-bet.webp" width={46.05} height={43.01} />
        </div>
      </div>
    </div>
  )
}

export default DownloadResultCard
