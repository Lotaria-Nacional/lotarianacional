import AddEmissionButton from "@/components/emission/add-emission-button"
import EmissionTable from "@/components/emission/emission-table"
import { useEmissions } from "@/hooks/useEmissions"

const EmissionsPage = () => {
  const { emissions, isLoading } = useEmissions()
  return (
    <main className="bg-white p-4 rounded-lg w-full h-full flex flex-col items-center justify-center gap-4">
      <AddEmissionButton />
      {isLoading ? <span>...</span> : <EmissionTable emissions={emissions} />}
    </main>
  )
}

export default EmissionsPage
