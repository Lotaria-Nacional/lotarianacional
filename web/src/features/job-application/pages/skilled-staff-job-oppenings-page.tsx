import { useSearchParams } from "react-router-dom";
import JobOppeningListing from "../components/job-oppening-listing";
import { jobsList } from "../constants/job-oppenings";

export default function SkilledStaffJobOppeningsPage() {
  const [search] = useSearchParams();

  const q = search.get("departamento");
  const filtered = q
    ? jobsList.filter((job) => job.department === q)
    : jobsList;

  return <JobOppeningListing data={filtered} />;
}
