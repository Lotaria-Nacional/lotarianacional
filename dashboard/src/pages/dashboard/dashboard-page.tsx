import DotsButton from "@/components/dots-button"
import StatisticSection from "@/components/statistic-section"
import ResultCardListing from "@/components/result/result-card-listing"
import TotalResultsAdded from "@/components/result/total-results-added"
import TotalAgenciesAdded from "@/components/agency/total-agencies-added"

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full lg:w-[1128px] gap-[20px] lg:min-h-[333px] flex flex-col lg:flex-row p-4 mx-auto">
        <div className="w-full lg:w-[534px] flex flex-col gap-3 p-3 bg-white rounded-[20px]">
          <div className="w-full flex flex-row justify-between items-start px-2">
            <span className="font-medium">Resultados diários</span>
            <DotsButton />
          </div>
          <ResultCardListing />
        </div>
        <StatisticSection />
      </div>

      <div className="w-full lg:w-[1128px] h-[263px] gap-[20px] flex flex-col lg:flex-row p-4 mx-auto">
        <div className="w-full lg:w-[534px] flex flex-col lg:flex-row gap-3 ">
          <TotalResultsAdded />
          <TotalAgenciesAdded />
        </div>

        <div className="w-full lg:w-[576px] flex flex-col pb-4 lg:pb-0 p-4 bg-white rounded-[20px]">
          <span className="font-medium text-[14px]">Google Analytics</span>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
