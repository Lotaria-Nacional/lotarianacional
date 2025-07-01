import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { jobsList } from "../data/fake-job-list";
import MoreJobOpenings from "../components/more-job-openings";
import { PageBody } from "@/shared/components/layout/page-body";
import JobApplicationForm from "../components/job-application-form";

export default function JobOppeningDetailsPage() {
  const { id } = useParams();

  const jobOppening = jobsList.find((job) => job.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <PageBody.Container>
      <main className="relative grid w-full grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
        <section className="w-full flex flex-col gap-4">
          <header className="flex flex-col gap-3">
            <span className="px-2 text-[12px] bg-[#f5f5f5] w-fit rounded-full">
              {jobOppening?.department}
            </span>
            <h1 className="text-[24px]">{jobOppening?.title}</h1>
          </header>
          <p className="text-justify text-sm">
            A Mota & Tavares Jogos, S.A., entidade oficial responsável pela
            exploração da Lotaria Nacional em Angola, está à procura de um Chefe
            Adjunto de Sorteio que queira juntar-se à nós na missão de
            comercializar jogos de lotaria de forma responsável e transparente
          </p>
          <h2 className="text-[16px]">Responsabilidades</h2>
          <p className="text-justify text-sm">{jobOppening?.description}</p>
          <h3 className="text-sm">
            Entre as suas principais responsabilidades estão:
          </h3>
          <ul className="pl-3 list-disc">
            {jobOppening?.responsabilities.map((responsa, idx) => (
              <li className="text-sm" key={idx}>
                {responsa}
              </li>
            ))}
          </ul>

          <h2 className="text-[16px]">Requisitos</h2>
          <ul className="pl-3 list-disc">
            {jobOppening?.requirements.map((requirement, idx) => (
              <li className="text-sm" key={idx}>
                {requirement}
              </li>
            ))}
          </ul>
        </section>

        <section className="w-full grid grid-cols-1 gap-6 sticky top-[150px]">
          <JobApplicationForm />
          <MoreJobOpenings />
        </section>
      </main>
    </PageBody.Container>
  );
}
