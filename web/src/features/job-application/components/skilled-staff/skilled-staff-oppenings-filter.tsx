import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/shared/components/ui/select";
import { useSearchParams } from "react-router-dom";
import Button from "@/shared/components/ui/button/button";
import { IoIosClose } from "react-icons/io";
import { departments } from "../../constants/departments";

export default function SkilledStaffOppeningsFilter() {
  const [search, setSearch] = useSearchParams();
  const searchValue = search.get("slug") || "";

  const handleValueChange = (value: string) => {
    setSearch((prev) => {
      const params = new URLSearchParams(prev);
      params.set("slug", value);
      return params;
    });
  };

  const handleCleanFilter = () => {
    setSearch((prev) => {
      const params = new URLSearchParams(prev);
      params.delete("slug");
      return params;
    });
  };

  return (
    <div className="flex gap-2">
      <Select
        value={searchValue}
        onValueChange={(value) => handleValueChange(value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Selecione o departamento" />
        </SelectTrigger>
        <SelectContent className="h-[150px]">
          {departments.map((dep) => (
            <SelectItem key={dep.value} value={dep.value}>
              {dep.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {searchValue && (
        <Button onClick={handleCleanFilter}>
          <IoIosClose />
        </Button>
      )}
    </div>
  );
}
