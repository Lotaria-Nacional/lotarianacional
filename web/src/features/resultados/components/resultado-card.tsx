import { twMerge } from "tailwind-merge"
import { useEffect, useState } from "react"
import { IResult } from "../../../interfaces"
import { MdPlayCircleOutline } from "react-icons/md"
import VideoLightBox from "../../../components/video-light-box"

export type ResultProps = {
  name: string
  startHour: string
  sortedNumbers: number[]
}

export type ResultCardProps = {
  result: IResult
  className?: string
}

const ResultadoCard = ({ result, className }: ResultCardProps) => {
  const sortedNumbers = [
    result.number_1,
    result.number_2,
    result.number_3,
    result.number_4,
    result.number_5,
  ]
  const [hoverOnCard, setHoverOnCard] = useState(false)
  const [openLightBox, setOpenLightBox] = useState(false)
  const handleOpenVideoLightBox = () => setOpenLightBox(true)
  const handleCloseVideoLightBox = () => setOpenLightBox(false)

  useEffect(() => {
    if (openLightBox) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [openLightBox])

  const currentDate = new Date().toISOString().split("T")[0]
  const resultDate = result.createdAt.toString().split("T")[0]

  const shouldBeGray = currentDate !== resultDate

  return (
    <>
      <div
        onMouseOver={() => setHoverOnCard(true)}
        onMouseLeave={() => setHoverOnCard(false)}
        className={twMerge(
          "relative bg-[url('/banner/card-loto.webp')] w-[180px] h-[115px] bg-center bg-cover bg-no-repeat flex flex-col gap-4 p-2 rounded-2xl text-LT_WHITE uppercase text-sm font-bold hover:transition-transform duration-200 ease-in-out transform",
          className
        )}
      >
        {shouldBeGray && (
          <div className="absolute inset-0 pointer-events-none z-30 w-full rounded-2xl h-full bg-zinc-600/90" />
        )}

        {!hoverOnCard ? (
          <>
            <header className="flex flex-col text-[15px] gap-2">
              <h1>{result.name}</h1>
              <span>{result.hour}</span>
            </header>

            <div className="flex w-full gap-1 items-center">
              {sortedNumbers.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="size-[30px] bg-white flex items-center justify-center text-LT_RED-200 rounded-full text-base font-bold"
                >
                  {item}
                </span>
              ))}
            </div>
          </>
        ) : (
          <div
            onClick={handleOpenVideoLightBox}
            className="w-full h-full flex items-center justify-center"
          >
            <MdPlayCircleOutline size={64} className="cursor-pointer" />
          </div>
        )}
      </div>
      {openLightBox && (
        <VideoLightBox
          videoURL={result.videoURL}
          handleClose={handleCloseVideoLightBox}
        />
      )}
    </>
  )
}

export default ResultadoCard
