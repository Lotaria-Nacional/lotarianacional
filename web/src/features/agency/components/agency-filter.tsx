import { SetURLSearchParams } from "react-router-dom";
import { LETTERS } from "@/features/agency/constants/letters-filter";

type Props = {
  selectedLetter: string;
  setFilter: SetURLSearchParams;
};

export default function AgencyFilter({ setFilter, selectedLetter }: Props) {
  const handleSelect = (value: string) => {
    setFilter((prev) => {
      if (value || value !== "") {
        prev.set("agencia", value);
      } else {
        prev.delete("agencia");
      }
      return prev;
    });
  };

  return (
    <div className="lg:flex hidden justify-between lg:justify-normal items-center w-full gap-3 text-lg uppercase mb-6">
      <span
        onClick={() => handleSelect("")}
        className="text-LT_RED-300 cursor-pointer rounded-lg border border-LT_RED-300 px-2 py-1 capitalize"
      >
        Todas
      </span>

      <div className="hidden lg:flex items-center justify-between gap-3">
        {LETTERS.map((letter) => (
          <span
            key={letter}
            className={`cursor-pointer size-8 flex items-center justify-center rounded-full ${
              letter === selectedLetter
                ? "text-white border border-LT_RED-300 bg-LT_RED-300"
                : "text-LT_RED-300 border border-LT_RED-300 bg-transparent"
            }`}
            onClick={() => handleSelect(letter)}
          >
            {letter}
          </span>
        ))}
      </div>

      <select
        className="block lg:hidden border border-LT_RED-300 uppercase rounded-lg py-3 w-1/5"
        onChange={(e) => handleSelect(e.target.value)}
      >
        {LETTERS.map((letter) => (
          <option key={letter} value={letter} className="uppercase">
            {letter}
          </option>
        ))}
      </select>
    </div>
  );
}
