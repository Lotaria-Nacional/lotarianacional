import EditAgencyForm from "@/components/agency/edit-agency-form"

const EditAgencyPage = () => {
  return (
    <main className="w-full flex items-center justify-center">
      <div className="relative w-[1128px] h-[636px] bg-white p-10 rounded-[20px] flex items-center justify-center flex-col">
        <div className="absolute top-10 left-10 w-full flex justify-start">
          <span className="px-4 py-2 font-medium rounded-[10px] bg-GRAY-100">
            Adicionar Agência
          </span>
        </div>

        <EditAgencyForm />
      </div>
    </main>
  )
}

export default EditAgencyPage
