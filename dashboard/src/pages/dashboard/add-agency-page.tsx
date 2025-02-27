import AgencyForm from "@/components/agency/agency-form"
const AddAgencyPage = () => {
  return (
    <main className="w-full flex items-center justify-center">
      <div className="relative w-[1128px] h-[636px] bg-white p-10 rounded-[20px] flex items-center justify-center flex-col">
        <div className="absolute top-10 left-10 w-full flex justify-start">
          <span className="px-4 py-2 font-medium rounded-[10px] bg-GRAY-100">
            Adicionar Agência
          </span>
        </div>
        <div className="w-[calc(100%-350px)]">
          <AgencyForm />
        </div>
      </div>
    </main>
  )
}

export default AddAgencyPage
