import { useSearchParams } from "react-router-dom";
import JobOppeningListing from "../components/job-oppening-listing";
import { skilledStaffOpenings } from "../constants/job-oppenings";

export default function SkilledStaffJobOppeningsPage() {
  const [search] = useSearchParams();

  const q = search.get("departamento");
  const filtered = q
    ? skilledStaffOpenings.filter((job) => job.department === q)
    : skilledStaffOpenings;

  return <JobOppeningListing data={filtered} />;
}
