import { saveAs } from "file-saver"
import { Button } from "./ui/button"
import { toPng } from "html-to-image"
import { IResult } from "@/interfaces"
import { toast } from "react-toastify"
import { useRef, useState } from "react"

type Props = {
  result: IResult
}

const DownloadResultCard = ({ result }: Props) => {
  const divRef = useRef<HTMLDivElement | null>(null)
  const [isLoading, setIsLoading] = useState(false)
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
      const dataURL = await toPng(divRef.current)
      saveAs(dataURL, "resultado.png")
      toast.success("Download feito com sucesso.")
    } catch (error) {
      toast.error("Erro ao fazer o download.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-[20px] h-[270px] shadow-sm shadow-white/20 p-2 w-full flex flex-col justify-around">
      <div className="w-full flex items-center justify-between">
        <span className="bg-yellow-500 text-black px-3 py-1 font-medium rounded-[10px] w-fit  uppercase">
          {result.name}
        </span>
      </div>
      <div ref={divRef} className="w-full flex flex-col gap-4">
        <div className="loto-bg h-[119px] rounded-[13px] flex flex-col justify-center items-start gap-4 p-4">
          <div className="flex flex-col text-[15px] text-white">
            <span className="uppercase">{result.name}</span>
            <span>{result.hour}</span>
          </div>
          <div className="w-full mx-auto flex items-center gap-3">
            {numbers.map((number) => (
              <span
                key={number}
                className="size-[35px] bg-white text-RED-200 font-medium text-center flex items-center justify-center rounded-[50px]"
              >
                {number}
              </span>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="bg-RED-200"
          onClick={handleDownloadResult}
        >
          {isLoading ? "Baixando..." : "Baixar"}
        </Button>
      </div>
    </div>
  )
}

export default DownloadResultCard
