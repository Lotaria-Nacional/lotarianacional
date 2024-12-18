import { twMerge } from "tailwind-merge"

type Props = {
  message: string
  className?: string
}

const EmptyState = (props: Props) => {
  return (
    <div className={twMerge("flex items-center justify-center w-full h-[400px]", props.className)}>
      <span>{props.message}</span>
    </div>
  )
}

export default EmptyState
