import { BsDownload } from "react-icons/bs"
import { DownloadTicketProps } from "./download-result-card"
import { useCallback, useRef, useState } from "react"
import { toPng } from "html-to-image"
import { toast } from "react-toastify"

const DownloadResultCardStory = ({ result }: DownloadTicketProps) => {
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
        pixelRatio: 25,
      })
      const linkButton = document.createElement("a")
      linkButton.download = `${result.name}-resultado-story-${
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
    <div className="w-[274.84px] flex flex-col gap-2">
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
        className="result-ticket-story w-full h-[490.4px] relative flex items-center"
      >
        <div className="w-full flex items-center gap-[16px] absolute bottom-[160px] flex-col">
          <h2 className="font-edoSz">{result.name}</h2>

          <header className="flex flex-col items-center text-white text-[11px] mt-3">
            <span className="font-bold">
              {resultDate}{" "}
              <span className="text-yellow-400">
                {result.hour.replace("h", ":")}
              </span>
            </span>
            <span className="font-normal">NÚMEROS SORTEADOS</span>
          </header>

          <div className="flex items-center gap-[2.87px]">
            {numbers.map((number) => (
              <span
                key={number}
                className="size-[27.44px] flex items-center justify-center bg-white rounded-full text-center text-RED-300 text-[18.16px]"
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

export default DownloadResultCardStory
