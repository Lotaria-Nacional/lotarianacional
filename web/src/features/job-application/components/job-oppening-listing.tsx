import { JobOppening } from "../@types/job-oppening.types"
import JobOppeningCard from "./job-oppening-card"

type Props = {
  data: JobOppening[]
}

export default function JobOppeningListing({ data }: Props) {
  return (
    <section className="grid place-items-center md:place-items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-[18px]">
      {data.map((job, index) => (
        <JobOppeningCard data={job} key={index} />
      ))}
    </section>
  )
}
