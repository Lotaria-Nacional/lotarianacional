import { useNavigate } from "react-router-dom";
import { JobOppening } from "../@types/job-oppening.types";
import Button from "@/shared/components/ui/button/button";

type Props = {
  data: JobOppening;
};

export default function JobOppeningCard({
  data: { department, title, requirements, id },
}: Props) {
  const navigate = useNavigate();

  return (
    <div className="h-[250px] w-full lg:w-[293px] xl:w-full border rounded-[8px] p-4 grid grid-cols-1">
      <header className="flex flex-col gap-3">
        <span className="bg-[#F5F5F5] w-fit px-2 py-0.5 rounded-full text-[10px]">
          {department}
        </span>
        <h2 className="text-[18px]">{title}</h2>
      </header>

      <div className="flex flex-col h-[84px]">
        <h4 className="text-[14px]">Requisitor</h4>
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
          onClick={() => navigate(`/recrutamento/vaga/${id}/detalhes`)}
        >
          Ver detalhes
        </Button>

        <Button intent={"primary"} className="w-full">
          Candidatar-se
        </Button>
      </div>
    </div>
  );
}
