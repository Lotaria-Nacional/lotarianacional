import { toPng } from "html-to-image"
import { IResult } from "@/interfaces"
import { toast } from "react-toastify"
import { useCallback, useRef, useState } from "react"
import { BsDownload } from "react-icons/bs"

export type DownloadTicketProps = {
  result: IResult
}

const DownloadResultCard = ({ result }: DownloadTicketProps) => {
  const divRef = useRef<HTMLDivElement | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const numbers = [
    result.number_1,
    result.number_2,
    result.number_3,
    result.number_4,
    result.number_5,
  ]

  const handleDownload = useCallback(async () => {
    if (!divRef.current) return
    setIsLoading(true)
    try {
      const dataURL = await toPng(divRef.current, {
        cacheBust: true,
        pixelRatio: 20,
      })
      const linkButton = document.createElement("a")
      linkButton.download = `${result.name}-resultado-${
        result.createdAt.toString().split("T")[0]
      }.png`
      linkButton.href = dataURL
      linkButton.click()
      toast.success("Download feito com sucesso.")
    } catch (error) {
      toast.error("Erro ao fazer o download.")
    } finally {
      setIsLoading(false)
    }
  }, [divRef])

  const resultDate = result.createdAt
    .toString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join("/")

  return (
    <div className="flex shrink-0 flex-col gap-2 w-[337.43px]">
      <button
        onClick={handleDownload}
        disabled={isLoading}
        className="flex items-center text-sm gap-2 rounded-md duration-200 ease-in transition-all hover:bg-white/70 cursor-pointer bg-white px-4 py-2 self-end"
      >
        {isLoading ? "Baixando..." : "Baixar"}
        <BsDownload />
      </button>

      <div
        ref={divRef}
        className="relative flex flex-col items-center gap-2 p-4 w-full h-[421.4px] result-ticket-feed"
      >
        <h2 className="font-edoSz absolute top-[130px]">{result.name}</h2>

        <div className="flex flex-col gap-3 absolute bottom-[102px] items-center justify-center">
          <header className="flex flex-col text-white">
            <span className="text-[11.5px] font-bold">
              {resultDate}{" "}
              <span className="text-yellow-400">
                {result.hour.replace("h", ":")}
              </span>
            </span>

            <span className="text-[8.54px]">NÚMEROS SORTEADOS</span>
          </header>

          <div className="w-full flex items-center gap-[1.87px]">
            {numbers.map((number, index) => (
              <span
                key={index}
                className="size-[33.24px] bg-white rounded-full text-RED-300 text-[22.16px] flex items-center justify-center"
              >
                {number}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadResultCard
