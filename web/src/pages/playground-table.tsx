import { useTablePlayground } from "@/hooks/useTablePlayground"
import TABLE_PLAYGROUND_JSON from "../constants/db/como-jogar-tabela.json"
import MobileTablePlayground from "@/components/como-jogar/mobile-table-playground"
import DesktopTablePlayground from "@/components/como-jogar/desktop-table-playground"
import TableChanceSelectInput from "@/components/como-jogar/table-chance-select-input"

const PlayGroundTable = () => {
  const {
    chances,
    filteredTableContent,
    handleSelect,
    handleValue,
    value,
    selected,
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
        <div className="flex border lg:h-full items-center h-[44px] rounded-[10px] w-full lg:w-[457px]">
          <span className="bg-white h-full flex font-semibold sm:text-[14px] text-[12px] lg:text-[16px] rounded-l-[10px] px-[16px] w-full items-center justify-center text-center">
            Escolha a sua chance
          </span>
          <TableChanceSelectInput
            chances={chances}
            handleSelect={handleSelect}
            selected={selected || "Chance"}
          />
        </div>

        <input
          type="text"
          value={value}
          onChange={handleValue}
          placeholder="Digite o valor da aposta"
          className="w-full lg:w-[340px] bg-white border py-[10px] rounded-[10px] text-[16px] h-full outline-none text-center placeholder:text-center placeholder:text-[#818181]"
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
