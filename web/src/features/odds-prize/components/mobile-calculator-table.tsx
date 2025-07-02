import TableInfoMobile from "./bottom-info-mobile";
import { formatPrice } from "@/shared/utils/forma-price";
import { tableHeadersMobile } from "@/app/constants/teste";
import { CalculatorProps } from "../@types/calculator-props.types";

export default function MobileCalculatorTable({
  value,
  filterTableContent,
}: CalculatorProps) {
  const bullets = Array.from({ length: 5 }).map((_, item) => item);
  return (
    <>
      <div className="relative w-full block lg:hidden mt-[24px] h-[140px]">
        <div className="w-full flex gap-0 rounded-[8px]">
          <div className="sticky left-0 z-[10px] flex flex-col w-[150px] rounded-[8px]">
            {tableHeadersMobile.map((item, index) => (
              <span
                key={index}
                className={`bg-LT_RED-300 ${
                  index === 0
                    ? "rounded-t-[10px]"
                    : index === tableHeadersMobile.length - 1 &&
                      "rounded-b-[10px]"
                } flex items-center justify-center border h-[35px] px-4 text-center text-white`}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="rounded-[10px] lg:hidden ml-[6px] gap-[6px] overflow-x-scroll w-full flex">
            {filterTableContent ? (
              filterTableContent?.correct_numbers.map((item, index) => (
                <div key={index} className="w-full h-[35px] flex flex-col">
                  {/**  ######### FIRST ######### */}
                  <div className="border rounded-t-[8px] border-[#D9D9D9] bg-white py-2 h-full px-4 text-center md:w-full min-w-[150px] flex items-center">
                    <span className="w-full border-none bg-transparent outline-hidden text-center">
                      {formatPrice(Number(value))}
                    </span>
                  </div>

                  {/**  ######### SECOND ######### */}
                  <div className="border border-[#D9D9D9] bg-white h-full py-2 gap-1 text-center md:w-full min-w-[150px] flex items-center justify-center">
                    {bullets.map((_, index) => (
                      <span
                        key={index}
                        className={`border-none outline-hidden size-[14px] ${
                          index < item ? "bg-[#EB2224]" : "bg-LT_GRAY-100"
                        } rounded-full`}
                      />
                    ))}
                  </div>

                  {/**  ######### THIRD ######### */}
                  <div className="border border-[#D9D9D9] bg-white h-full py-2 px-4 text-center md:w-full min-w-[150px] flex items-center">
                    <span className="w-full border-none bg-transparent outline-hidden text-center">
                      {filterTableContent.multiplier[index]}
                    </span>
                  </div>

                  {/**  ######### FOURTH ######### */}
                  <div className="border rounded-b-[8px] border-[#D9D9D9] bg-white h-full py-2 px-4 text-center md:w-full min-w-[150px] flex items-center">
                    <span className="w-full border-none bg-transparent outline-hidden text-center">
                      {formatPrice(
                        filterTableContent.multiplier[index] * Number(value)
                      )}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col h-[35px] w-full">
                <div className="border rounded-t-[8px] border-[#D9D9D9] bg-white py-2 h-[35px] px-4 text-center md:w-full min-w-[150px] flex items-center">
                  <span className="w-full border-none bg-transparent outline-hidden text-center">
                    {formatPrice(Number(value))}
                  </span>
                </div>

                {/**  ######### SECOND ######### */}
                <div className="border border-[#D9D9D9] bg-white h-[35px] py-3 gap-1 text-center md:w-full min-w-[150px] flex items-center justify-center">
                  {bullets.map((_, index) => (
                    <span
                      key={index}
                      className="border-none outline-hidden size-[16px] bg-LT_GRAY-100 rounded-full"
                    />
                  ))}
                </div>

                {/**  ######### THIRD ######### */}
                <div className="border border-[#D9D9D9] bg-white h-[35px] py-2 px-4 text-center md:w-full min-w-[150px] flex items-center">
                  <span className="w-full border-none bg-transparent outline-hidden text-center">
                    0
                  </span>
                </div>

                {/**  ######### FOURTH ######### */}
                <div className="border rounded-b-[8px] border-[#D9D9D9] bg-white h-[35px] py-2 px-4 text-center md:w-full min-w-[150px] flex items-center">
                  <span className="w-full border-none bg-transparent outline-hidden text-center">
                    0,00 AKZ
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <TableInfoMobile />
    </>
  );
}
