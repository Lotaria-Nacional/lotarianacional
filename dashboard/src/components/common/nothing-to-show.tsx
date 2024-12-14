import { twMerge } from "tailwind-merge"

const NothingToShow = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        "w-full flex items-center justify-center",
        className
      )}
    >
      <span>Não há nada ainda.</span>
    </div>
  )
}

export default NothingToShow
