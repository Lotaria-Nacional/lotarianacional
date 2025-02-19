import { BsDownload } from "react-icons/bs"
import { IDailyResult } from "@/interfaces"
import { useCallback, useRef, useState } from "react"
import { toast } from "react-toastify"
import { toPng } from "html-to-image"

type Props = {
  data: IDailyResult
}
const DownloadTodaysResultCard = ({ data }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleNumbers = (index: number) => {
    const result = data.results[index]
    const numbers = [
      result.number_1,
      result.number_2,
      result.number_3,
      result.number_4,
      result.number_5,
    ]
    return numbers
  }

  const handleDownload = useCallback(async () => {
    if (!ref.current) return
    setIsDownloading(true)
    try {
      const imageData = await toPng(ref.current, {
        cacheBust: true,
        pixelRatio: 20,
      })
      let link = document.createElement("a")
      link.download = `resultados-do-dia-${
        data.date.toString().split("T")[0]
      }.png`
      link.href = imageData
      link.click()
    } catch (error) {
      toast.error("Erro ao fazer o download.")
    } finally {
      setIsDownloading(false)
    }
  }, [ref.current])

  const resultDate = data.date
    .toString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join("/")

  return (
    <div className="flex shrink-0 flex-col gap-2 w-[337.43px]">
      <div className="flex items-end justify-between w-full">
        <span className="text-[12px]">Para o Feed</span>
        <button
          onClick={handleDownload}
          className="flex items-center text-sm gap-2 rounded-md duration-200 ease-in transition-all hover:bg-white/70 cursor-pointer bg-white px-4 py-2"
        >
          {isDownloading ? "Baixando..." : "Baixar"}
          <BsDownload />
        </button>
      </div>

      <div
        ref={ref}
        className="relative todays-results-feed flex flex-col items-center gap-1 p-4 w-full h-[421.4px]"
      >
        <header className="absolute items-center top-[144px] flex flex-col text-white text-[13px]">
          <span className="font-bold">{resultDate}</span>
          <span className="text-[8px]">NÚMEROS SORTEADOS</span>
          <span></span>
        </header>
        <div className="absolute top-[178px]  flex-col gap-[1px] flex mx-auto">
          {data.results.map((result, index) => (
            <div key={index} className="max-h-[38px]">
              <span className="text-[8px] text-white font-bold uppercase">
                {result.name}
              </span>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold text-white">
                  {result.hour.replace("h", ":")}
                </span>
                <div className="flex items-center gap-1">
                  {handleNumbers(index).map((number, i) => (
                    <span
                      key={i}
                      className="bg-white rounded-full size-[20px] text-[14px] font-semibold flex items-center justify-center text-RED-300"
                    >
                      {number}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DownloadTodaysResultCard
