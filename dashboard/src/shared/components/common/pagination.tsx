type Props = {} 

export default function Pagination({}: Props) {
  return (
    <div className="flex h-[40px] border border-LT-GRAY-100 rounded-lg items-center w-[200px] mx-auto">
      {Array.from({ length: 5 }).map((_, i) => (
        <button
          key={i}
          className={`${
            i === 0
              ? "bg-LT-RED-100 text-white rounded-l-lg"
              : i === 4
              ? "rounded-r-lg "
              : " bg-white text-black border-x border-x-LT-GRAY-100"
          } h-full w-full`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )
}
