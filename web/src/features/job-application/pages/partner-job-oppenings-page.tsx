import { useSearchParams } from "react-router-dom";
import { useFetchPartnerOppeningJobs } from "../hooks/use-fetch-partner-oppening-jobs";
import PartnerJobOppeningListing from "../components/partner/partner-job-oppening-listing";
import noJobIcon from "@/assets/icons/no-job.svg";

export default function PartnerJobOppeningsPage() {
  const [search] = useSearchParams();

  const slug = search.get("slug") || "";

  const jobs = useFetchPartnerOppeningJobs(slug);

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

  const query = search.get("localizacao");
  const filtered = query
    ? jobsArr.filter((job) => job.location === query)
    : jobsArr;

  return <PartnerJobOppeningListing data={filtered} />;
}
