import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/shared/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import Button from "@/shared/components/ui/button/button";
import { JobOppening } from "../../@types/job-oppening.types";
import SkilledStaffOppeningForm from "./skilled-staff-oppening-form";

type Props = {
  data: JobOppening;
};

export default function JobOppeningCard({ data }: Props) {
  const navigate = useNavigate();

  const { department, title, requirements, id, quantity } = data;

  return (
    <div className="h-[250px] w-full lg:w-[293px] xl:w-full gap-4 border rounded-[8px] p-4 grid grid-cols-1">
      <header className="flex flex-col gap-3">
        <div className=" flex items-center justify-between w-full">
          <span className="bg-[#F5F5F5] capitalize w-fit px-2 py-0.5 rounded-full text-[10px]">
            {department}
          </span>
          <span className="text-xs">({quantity})</span>
        </div>
        <h2 className="text-[18px] capitalize">{title}</h2>
      </header>

      <div className="flex flex-col overflow-y-hidden h-[79px]">
        <h4 className="text-[14px]">Requisitos</h4>
        <ul className="text-[12px]">
          {requirements.map((requirement, index) => (
            <li key={index} className="line-clamp-1">
              - {requirement}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full flex gap-2">
        <Button
          intent={"ghost"}
          className="w-full"
          onClick={() =>
            navigate({
              pathname: `/carreira/vagas/quadros/${id}`,
            })
          }
        >
          Ver detalhes
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button intent={"primary"} className="w-full">
              Candidatar-se
            </Button>
          </DialogTrigger>
          <DialogContent className="overflow-scroll h-fit">
            {
              <SkilledStaffOppeningForm
                title={title}
                department={department}
                className="border-0 p-0"
              />
            }
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
