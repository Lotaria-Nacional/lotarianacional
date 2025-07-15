import Button from "@/shared/components/ui/button/button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetchPartnerOppeningJobs } from "../../hooks/use-fetch-partner-oppening-jobs";

export default function MorePartnerJobOpenings() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useFetchPartnerOppeningJobs();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!data?.data?.length) {
    return <div>Nada a mostrar.</div>;
  }

  const filteredJobs = data.data.filter((job) => job.id !== id).slice(0, 3);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Mais vagas</h3>
        <Link
          to="/carreira/revendedor"
          className="text-LT_RED-300 text-xs underline"
        >
          Ver todas as vagas
        </Link>
      </div>

      {filteredJobs.length > 0 ? (
        <ul className="flex flex-col gap-3">
          {filteredJobs.map((job) => (
            <li
              key={job.id}
              className="w-full flex items-center justify-between border rounded-lg p-4"
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs w-fit px-2 py-0.5 rounded-full bg-[#f5f5f5]">
                  Revendedor
                </span>
                <h4 className="capitalize text-sm font-medium">{job.title}</h4>
              </div>
              <Button
                intent="link"
                className="text-sm"
                onClick={() => navigate(`/carreira/vagas/revendedor/${job.id}`)}
              >
                Ver detalhes
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center py-6">
          <p className="text-sm text-gray-500">
            Não há mais vagas semelhantes.
          </p>
        </div>
      )}
    </div>
  );
}
