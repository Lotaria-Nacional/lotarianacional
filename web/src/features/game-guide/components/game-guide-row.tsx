import { GameGuideProps } from "../constants/game-guide-content"

type Props = {
  data: GameGuideProps
  reverse: boolean
}

export default function GameGuideRow({
  data: { id, image, description },
  reverse = false,
}: Props) {
  return (
    <div
      className={`${
        reverse ? "" : "flex-row-reverse"
      } h-[508] w-full gap-[116px] hidden lg:flex items-center justify-between`}
    >
      <img src={image.desktop} alt="" className="h-full w-[576px]" />
      <div>
        <h1 className="flex items-center font-edo-sz text-[46px] gap-4 text-LT_RED-100">
          <span className="size-[50px] rounded-full bg-LT_RED-100 text-yellow-300 flex items-center justify-center">
            {id}
          </span>
          <span>Passo</span>
        </h1>
        <p className="text-[20px] text-justify">{description}</p>
      </div>
    </div>
  )
}
