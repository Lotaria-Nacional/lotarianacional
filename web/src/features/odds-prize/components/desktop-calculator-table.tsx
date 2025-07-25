import TableInfoDesktop from "./bottom-info-desktop";
import { tableHeaders } from "@/app/constants/teste";
import { formatPrice } from "@/shared/utils/forma-price";
import { CalculatorProps } from "../@types/calculator-props.types";

export default function DesktopCalculatorTable({
  value,
  filterTableContent,
}: CalculatorProps) {
  const bullets = Array.from({ length: 5 }).map((bullet) => bullet);
  return (
    <>
      <div className="w-full hidden lg:block h-full rounded-[16px] bg-white">
        {/** ########################  TABLE HEAD  ############################### */}
        <div className="w-full flex items-center justify-center text-center">
          {tableHeaders.map((cell, index) => (
            <div
              key={index}
              className={`xl:w-full lg:w-[340px] h-[39px] p-[10px] flex items-center justify-center bg-LT_RED-300 text-white border ${
                index === 0
                  ? "rounded-tl-[10px]"
                  : index === tableHeaders.length - 1
                  ? "rounded-tr-[10px]"
                  : ""
              }`}
            >
              {cell}
            </div>
          ))}
        </div>

        {/** ########################  TABLE BODY  ############################### */}

        <div className="h-full w-full flex flex-col">
          {filterTableContent ? (
            filterTableContent.correct_numbers.map((cell, index) => (
              <div key={index} className="flex items-center justify-center">
                <div
                  key={`${index} inner-div`}
                  className={`border ${
                    index === filterTableContent.correct_numbers.length - 1 &&
                    "rounded-bl-[10px]"
                  } xl:w-full lg:w-[340px] p-[10px] h-[39px] text-center`}
                >
                  {formatPrice(Number(value))}
                </div>
                <div
                  key={`${index} inner-inner-div`}
                  className="border xl:w-full lg:w-[340px] p-[10px] flex gap-[8PX] justify-center items-center h-[39px]"
                >
                  {bullets.map((_, i) => {
                    return (
                      <div
                        key={`${i} deep-inner-div`}
                        className={`w-[19px] h-[19px] rounded-full ${
                          i < cell ? "bg-LT_RED-300" : "bg-gray-300"
                        }`}
                      />
                    );
                  })}
                </div>
                <div
                  key={`${index} inner-div-1`}
                  className="border xl:w-full lg:w-[340px] text-center p-[10px] h-[39px] "
                >
                  {filterTableContent.multiplier[index]}
                </div>

                <div
                  key={`${index} inner-div-2`}
                  className={`border text-center xl:w-full lg:w-[340px] p-[10px] h-[39px] ${
                    index === filterTableContent.correct_numbers.length - 1 &&
                    "rounded-br-[10px]"
                  }`}
                >
                  {formatPrice(
                    Number(value) * filterTableContent.multiplier[index]
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="w-full bg-white h-[39px] flex items-center justify-center">
              <div className="xl:w-full lg:w-[340px] border h-full text-center flex items-center justify-center">
                {formatPrice(Number(value))}
              </div>
              <div className="xl:w-full lg:w-[340px] border h-full text-center flex items-center justify-center gap-[10px]">
                {bullets.map((_, index) => (
                  <span
                    key={index}
                    className="size-[19px] rounded-full bg-LT_GRAY-100"
                  />
                ))}
              </div>
              <div className="xl:w-full lg:w-[340px] border h-full text-center flex items-center justify-center">
                0
              </div>
              <div className="xl:w-full lg:w-[340px] border h-full text-center flex items-center justify-center">
                0 AKZ
              </div>
            </div>
          )}
        </div>
      </div>

      <TableInfoDesktop />
    </>
  );
}
