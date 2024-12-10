import AddResultCardInput from "@/components/result/add-result-card-input"
const AddResultsPage = () => {
  return (
    <main className="w-full flex items-center justify-center h-full">
      <div className="w-[588px] grid grid-cols-2 gap-[20px]">
        <AddResultCardInput name="fezada" hour="10h30" />
        <AddResultCardInput name="aqueceu" hour="13h30" />
        <AddResultCardInput name="kazola" hour="16h30" />
        <AddResultCardInput name="eskebra" hour="19h30" />
      </div>
    </main>
  )
}

export default AddResultsPage
