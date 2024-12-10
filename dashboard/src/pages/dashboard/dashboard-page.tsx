import DotsButton from "@/components/dots-button"
import ResultCardListing from "@/components/result/result-card-listing"

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full lg:w-[1128px] gap-[20px] min-h-[333px] flex flex-row p-4 mx-auto">
        <div className="w-[534px] flex flex-col gap-3 p-3 bg-white rounded-[20px]">
          <div className="w-full flex flex-row justify-between items-start px-2">
            <span>Resultados diários</span>
            <DotsButton />
          </div>
          <ResultCardListing />
        </div>
        <div className="w-[576px] p-3 bg-white rounded-[20px]"></div>
      </div>
      <div className="w-full lg:w-[1128px] h-[263px] bg-indigo-700 p-4 mx-auto"></div>
    </div>
  )
}

export default DashboardPage
