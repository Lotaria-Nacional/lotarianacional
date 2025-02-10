import { useTablePlayground } from "@/hooks/useTablePlayground"
import TABLE_PLAYGROUND_JSON from "../constants/db/como-jogar-tabela.json"
import MobileTablePlayground from "@/components/como-jogar/mobile-table-playground"
import DesktopTablePlayground from "@/components/como-jogar/desktop-table-playground"
import TableChanceSelectInput from "@/components/como-jogar/table-chance-select-input"

const PlayGroundTable = () => {
  const {
    chances,
    value,
    selected,
    handleValue,
    handleSetChoice,
    filteredTableContent,
    setIsSelectMenuOpen,
    isSelectMenuOpen,
    selectDivRef,
  } = useTablePlayground(TABLE_PLAYGROUND_JSON)

  const formatMoney = (value: number) => {
    const newVal = new Intl.NumberFormat("pt-PT", {
      style: "currency",
      currency: "AKZ",
    }).format(value)

    return newVal
  }

  return (
    <main className="w-full flex flex-col items-center gap-4 lg:gap-[40px]">
      <div className="w-full flex lg:flex-row flex-col gap-4 lg:h-[42px] items-center justify-between">
        <div className="flex lg:h-full items-center justify-between lg:justify-center h-[44px] rounded-[10px] gap-4  w-full lg:w-[450px]">
          <span className="h-full items-center lg:justify-center flex font-semibold text-[16px] w-[300px]">
            Escolha a sua chance
          </span>
          <TableChanceSelectInput
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

      <DesktopTablePlayground
        value={value}
        formatMoney={formatMoney}
        handleValue={handleValue}
        filterTableContent={filteredTableContent}
      />
      <MobileTablePlayground
        value={value}
        formatMoney={formatMoney}
        handleValue={handleValue}
        filterTableContent={filteredTableContent}
      />
    </main>
  )
}

export default PlayGroundTable
