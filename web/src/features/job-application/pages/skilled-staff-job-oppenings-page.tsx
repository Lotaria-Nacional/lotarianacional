import { useSearchParams } from "react-router-dom";
import { useFetchOppeningJobs } from "../hooks/use-fetch-oppening-jobs";
import JobOppeningListing from "../components/skilled-staff/job-oppening-listing";
import noJobIcon from "@/assets/icons/no-job.svg";

export default function SkilledStaffJobOppeningsPage() {
  const [search] = useSearchParams();
  const slug = search.get("slug") || "";
  const jobs = useFetchOppeningJobs(slug);

  if (jobs.isLoading) {
    return <div>Carregando...</div>;
  }

  if (!jobs.data?.data.length) {
    return (
      <div className="flex flex-col gap-4">
        <img src={noJobIcon} />
        <p>Não há vagas disponíveis.</p>
      </div>
    );
  }

  const jobsArr = jobs.data.data;

  console.log(jobsArr);

  const query = search.get("departamento");

  const filtered = query
    ? jobsArr.filter((job) => job.department === query)
    : jobsArr;

  return <JobOppeningListing data={filtered} />;
}
