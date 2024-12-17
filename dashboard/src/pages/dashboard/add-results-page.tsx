import AddResultCardInput from "@/components/result/add-result-card-input"
const AddResultsPage = () => {
  return (
    <main className="w-full flex items-center justify-center h-full">
      <div className="w-[588px] grid grid-cols-2 gap-[20px]">
        <AddResultCardInput name="fezada" hour="10h00" />
        <AddResultCardInput name="aqueceu" hour="13h00" />
        <AddResultCardInput name="kazola" hour="16h00" />
        <AddResultCardInput name="eskebra" hour="19h00" />
      </div>
    </main>
  )
}

export default AddResultsPage
