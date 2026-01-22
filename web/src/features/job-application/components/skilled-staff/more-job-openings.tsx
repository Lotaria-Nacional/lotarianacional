import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '@/shared/components/ui/button/button';
import { useFetchOppeningJobs } from '../../hooks/use-fetch-oppening-jobs';
import useIframe from '@/shared/hooks/use-iframe';

function MoreJobOpenings() {
  const { id } = useParams();

  const navigate = useNavigate();
  const { basePath } = useIframe();

  const { data, isLoading } = useFetchOppeningJobs();

  if (isLoading) {
    return <div className="flex items-center justify-center w-full h-full">Carregando...</div>;
  }

  if (!data?.data?.length) {
    return <div>Nada a mostrar.</div>;
  }

  const filteredJobs = data.data.filter((job) => job.id !== id).slice(0, 3);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Título e link */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Mais vagas</h3>
        <Link to={`${basePath}/carreira/vagas`} className="text-LT_RED-300 text-xs underline">
          Ver todas as vagas
        </Link>
      </div>

      {filteredJobs.length ? (
        <ul className="flex flex-col gap-3">
          {filteredJobs.map((job) => (
            <li key={job.id} className="w-full flex items-center justify-between border rounded-lg p-4">
              <div className="flex flex-col gap-2">
                {job.department && (
                  <span className="text-xs w-fit px-2 py-0.5 rounded-full bg-[#f5f5f5]">{job.department}</span>
                )}
                <h4 className="capitalize text-sm font-medium">{job.title}</h4>
              </div>
              <Button
                intent="link"
                className="text-sm"
                onClick={() => navigate(`${basePath}/carreira/vagas/quadros/${job.id}`)}
              >
                Ver detalhes
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center py-6">
          <p className="text-sm text-gray-500">Não há mais vagas semelhantes.</p>
        </div>
      )}
    </div>
  );
}

export default MoreJobOpenings;
