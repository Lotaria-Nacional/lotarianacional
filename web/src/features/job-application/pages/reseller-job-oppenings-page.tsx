import { useSearchParams } from "react-router-dom";
import JobOppeningListing from "../components/job-oppening-listing";
import { resellersOppenings } from "../constants/job-oppenings";

export default function ResellerJobOppeningsPage() {
  const [search] = useSearchParams();

  const q = search.get("localizacao");
  const filtered = q
    ? resellersOppenings.filter((job) => job.location === q)
    : resellersOppenings;

  return <JobOppeningListing data={filtered} />;
}
