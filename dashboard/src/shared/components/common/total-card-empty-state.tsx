import EmptyState from "./empty-state"

type Props = {
  message: string
}

export default function TotalCardEmptyState({ message }: Props) {
  return (
    <div className="w-full bg-white rounded-card h-[180px] min-h-[240px] lg:h-full flex gap-2 flex-col items-center justify-center lg:py-10 p-2 py-4">
      <EmptyState message={message || "Não há nada ainda."} />
    </div>
  )
}
