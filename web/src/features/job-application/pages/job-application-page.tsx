import { Outlet, useLocation } from "react-router-dom";
import { PageBody } from "@/shared/components/layout/page-body";
import { PageHeader } from "@/shared/components/layout/page-header";
import ResellersFilter from "../components/reseller-oppenings-filter";
import SkilledStaffOppeningFilter from "../components/skilled-staff-oppenings-filter";

type PathNameOptions = "quadros" | "revendedores";

export default function JobApplicationPage() {
  const location = useLocation();
  const pathname = location.pathname.split("/")[2] as PathNameOptions;

  return (
    <PageBody.Container>
      <PageHeader.Container>
        <PageHeader.Title>Vagas disponíveis para {pathname}</PageHeader.Title>
        <PageHeader.Actions>
          {pathname === "quadros" ? (
            <SkilledStaffOppeningFilter />
          ) : (
            <ResellersFilter />
          )}
        </PageHeader.Actions>
      </PageHeader.Container>
      <Outlet />
    </PageBody.Container>
  );
}
