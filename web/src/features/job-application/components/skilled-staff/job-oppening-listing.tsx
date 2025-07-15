import { JobOppening } from "../../@types/job-oppening.types";
import JobOppeningCard from "./job-oppening-card";
import noJobsPlaceholder from "@/assets/icons/no-job.svg";

type Props = {
  data: JobOppening[];
};

export default function JobOppeningListing({ data }: Props) {
  if (data.length === 0) {
    return (
      <div className="w-full flex-col gap-4 flex items-center justify-center lg:mt-12">
        <img
          alt="placeholder"
          src={noJobsPlaceholder}
          className="size-[134px] md:size-[202px]"
        />
        <p className="text-[14px] md:text-base">Nenhuma vaga encontrada</p>
      </div>
    );
  }

  return (
    <section className="grid place-items-center md:place-items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-[18px]">
      {data.map((job, index) => (
        <JobOppeningCard data={job} key={index} />
      ))}
    </section>
  );
}
