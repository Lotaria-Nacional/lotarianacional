import { PageBody } from "@/shared/components/layout/page-body";
import { PageHeader } from "@/shared/components/layout/page-header";
import JobOppeningListing from "../components/job-oppening-listing";
import { jobsList } from "../data/fake-job-list";

export default function JobApplicationPage() {
  return (
    <PageBody.Container>
      <PageHeader.Container>
        <PageHeader.Title>Vagas disponíveis</PageHeader.Title>
      </PageHeader.Container>

      {/** JobOppeningListing  */}
      <JobOppeningListing data={jobsList} />
    </PageBody.Container>
  );
}
