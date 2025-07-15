import { Navigate, useParams } from "react-router-dom";
import { PageBody } from "@/shared/components/layout/page-body";
import ResellerOppeningForm from "../components/partner/partner-oppening-form";
import MorePartnerJobOpenings from "../components/partner/more-partner-job-openings";
import { useGetPartnerOppeningJobById } from "../hooks/use-get-partner-oppening-job-by-id";
import { useEffect } from "react";

export default function PartnerJobDetailsPage() {
  const { id } = useParams();
  const job = useGetPartnerOppeningJobById(id!);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (job.isLoading) {
    return <div>Carregando...</div>;
  }

  if (!job.data) {
    return <Navigate to="/carreira/revendedor" replace />;
  }

  const { title, location, responsabilities, requirements, description } =
    job.data;

  return (
    <PageBody.Container>
      <main className="relative grid w-full grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
        <section className="w-full flex flex-col gap-4">
          {/* Header */}
          <header className="flex flex-col gap-3">
            <span className="px-2 capitalize text-[12px] bg-[#f5f5f5] w-fit rounded-full">
              Revendedor
            </span>
            <h1 className="capitalize text-[24px]">{title}</h1>
            {location && (
              <h2 className="capitalize text-[16px]">
                Localização: {location}
              </h2>
            )}
          </header>

          {/* Intro */}
          <p className="text-justify text-sm">
            A Mota & Tavares Jogos, S.A., entidade oficial responsável pela
            exploração da Lotaria Nacional em Angola, está à procura de um/a{" "}
            <span className="capitalize font-semibold">{title}</span> que queira
            juntar-se à nós na missão de comercializar jogos de lotaria de forma
            responsável e transparente.
          </p>

          {/* Descrição */}
          {typeof description === "string" && description.length > 0 && (
            <p className="text-justify text-sm">{description}</p>
          )}

          {/* Responsabilidades */}
          {Array.isArray(responsabilities) && responsabilities.length > 0 && (
            <>
              <h2 className="text-[16px]">Responsabilidades</h2>
              <h3 className="text-sm">
                Entre as suas principais responsabilidades estão:
              </h3>
              <ul className="pl-3 list-disc">
                {responsabilities.map((item, idx) => (
                  <li className="text-sm" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Requisitos */}
          {Array.isArray(requirements) && requirements.length > 0 && (
            <>
              <h2 className="text-[16px]">Requisitos</h2>
              <ul className="pl-3 list-disc">
                {requirements.map((item, idx) => (
                  <li className="text-sm" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>

        {/* Sidebar */}
        <section className="w-full grid grid-cols-1 gap-6 sticky top-[150px]">
          <ResellerOppeningForm location={location} />
          <MorePartnerJobOpenings />
        </section>
      </main>
    </PageBody.Container>
  );
}
