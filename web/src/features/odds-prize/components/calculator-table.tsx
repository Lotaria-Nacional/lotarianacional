import { CHANCES } from "@/features/odds-prize/constants/chances";
import ChancesSelectInput from "@/features/odds-prize/components/chances-select-input";
import MobileCalculatorTable from "@/features/odds-prize/components/mobile-calculator-table";
import DesktopCalculatorTable from "@/features/odds-prize/components/desktop-calculator-table";
import { useOddsPrizesCalculator } from "@/features/odds-prize/hooks/use-odds-prize-calculator";

export default function OddsPrizesCalculator() {
  const {
    value,
    chances,
    selected,
    handleValue,
    selectDivRef,
    handleSetChoice,
    isSelectMenuOpen,
    setIsSelectMenuOpen,
    filteredTableContent,
  } = useOddsPrizesCalculator(CHANCES);

  return (
    <main className="w-full flex flex-col items-center gap-4 lg:gap-[40px]">
      <div className="w-full flex lg:flex-row flex-col gap-4 lg:h-[42px] items-center justify-between">
        <div className="flex lg:h-full items-center justify-between lg:justify-center h-[44px] rounded-[10px] gap-4  w-full lg:w-[450px]">
          <span className="h-full items-center lg:justify-center flex font-semibold text-[16px] w-[300px]">
            Escolha a sua chance
          </span>
          <ChancesSelectInput
            chances={chances}
            ref={selectDivRef}
            selected={selected || null}
            handleSetChoice={handleSetChoice}
            isSelectMenuOpen={isSelectMenuOpen}
            setIsSelectMenuOpen={setIsSelectMenuOpen}
          />
        </div>

        <input
          type="text"
          value={value}
          inputMode="numeric"
          onChange={handleValue}
          placeholder="Digite o valor da aposta"
          className="w-full lg:w-[340px] bg-white border border-black py-[10px] rounded-[10px] text-[16px] h-full outline-none text-center placeholder:text-center placeholder:text-black"
        />
      </div>

      <DesktopCalculatorTable
        value={value}
        handleValue={handleValue}
        filterTableContent={filteredTableContent}
      />
      <MobileCalculatorTable
        value={value}
        handleValue={handleValue}
        filterTableContent={filteredTableContent}
      />
    </main>
  );
}
