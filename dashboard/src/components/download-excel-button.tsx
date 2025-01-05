import { Button } from "./ui/button"
import { Download } from "lucide-react"

type Props = {
  file: string
}

const DownloadExcelButton = (props: Props) => {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = props.file
    link.download = "estatisticas.xlsx"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button className="self-end cursor-pointer" variant={"ghost"} asChild>
      <a onClick={handleDownload}>
        <span>Baixar Planilha</span>
        <Download />
      </a>
    </Button>
  )
}

export default DownloadExcelButton
