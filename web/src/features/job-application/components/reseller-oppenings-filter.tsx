import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/shared/components/ui/select";
import { useSearchParams } from "react-router-dom";
import Button from "@/shared/components/ui/button/button";
import { jobOppeningLocations } from "../constants/job-oppening-locations";
import { IoIosClose } from "react-icons/io";

export default function ResellersFilter() {
  const [search, setSearch] = useSearchParams();

  const searchValue = search.get("localizacao") || "";

  const handleApplyFilter = (value: string) => {
    setSearch((prev) => {
      const params = new URLSearchParams(prev);
      params.set("localizacao", value);
      return params;
    });
  };

  const handleClearFilter = () => {
    setSearch((prev) => {
      const params = new URLSearchParams(prev);
      params.delete("localizacao");
      return params;
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Select
        value={searchValue}
        onValueChange={(value) => handleApplyFilter(value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Selecione a localização" />
        </SelectTrigger>
        <SelectContent className="h-[180px]">
          {jobOppeningLocations.map((location) => (
            <SelectItem value={location.value} key={location.value}>
              {location.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {searchValue && (
        <Button onClick={handleClearFilter}>
          <IoIosClose />
        </Button>
      )}
    </div>
  );
}
