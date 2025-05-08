import AddResultForm from "@/features/results/components/form/add-result-form"

type Props = {}

export default function AddResultsPage({}: Props) {
  return (
    <div className="main grid grid-cols-1 md:grid-cols-2 h-full gap-6">
      <AddResultForm name="fezada" hour="10H00" />
      <AddResultForm name="aqueceu" hour="13H00" />
      <AddResultForm name="kazola" hour="16H00" />
      <AddResultForm name="eskebra" hour="19H00" />
    </div>
  )
}
