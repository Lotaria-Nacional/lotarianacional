type Props = {
  data: {
    id: number
    image: string
    description: string
  }
  reverse: boolean
}

const ComoJogarRow = ({
  data: { description, image, id },
  reverse = false,
}: Props) => {
  return (
    <div
      className={`${
        reverse ? "" : "flex-row-reverse"
      } h-[508] w-full gap-[116px] hidden lg:flex items-center justify-between`}
    >
      <img src={image} alt="" className="h-full w-[576px]" />
      <div>
        <h1 className="flex items-center edoSZ !text-[46px] gap-4 text-LT_RED-100">
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

export default ComoJogarRow
