import { jobsList } from "../data/fake-job-list";
import Button from "@/shared/components/ui/button/button";
import { Link, useNavigate, useParams } from "react-router-dom";

function MoreJobOpenings() {
  const { id } = useParams();
  const navigate = useNavigate();

  const filteredJobOppenings = jobsList
    .filter((jobs) => jobs.id !== Number(id))
    .slice(0, 3);

  return (
    <ul className="space-y-3 w-full h-full">
      <div className="w-full flex justify-between items-start">
        <h3>Mais vagas</h3>
        <Link
          to={"/recrutamento"}
          className="text-LT_RED-300 text-xs underline"
        >
          Ver todas as vagas
        </Link>
      </div>
      {filteredJobOppenings.map((job, idx) => (
        <li
          key={idx}
          className="w-full flex items-center justify-between border rounded-lg p-4"
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#f5f5f5]">
              {job.department}
            </span>
            <h3 className="capitalize">{job.title}</h3>
          </div>
          <Button
            intent={"link"}
            className="text-sm"
            onClick={() => navigate(`/recrutamento/vaga/${job.id}/detalhes`)}
          >
            Ver detalhes
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default MoreJobOpenings;
