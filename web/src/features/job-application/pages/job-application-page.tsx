import { Outlet, useLocation } from "react-router-dom";
import { PageBody } from "@/shared/components/layout/page-body";
import { PageHeader } from "@/shared/components/layout/page-header";
import ResellersFilter from "../components/reseller-oppenings-filter";
import SkilledStaffOppeningFilter from "../components/skilled-staff-oppenings-filter";

type PathNameOptions = "revendedor" | "vagas";

export default function JobApplicationPage() {
  const location = useLocation();
  const pathname = location.pathname.split("/")[2] as PathNameOptions;

  return (
    <PageBody.Container>
      <PageHeader.Container>
        <PageHeader.Title className="normal-case">
          {pathname === "revendedor" ? (
            "Torna-te revendedor"
          ) : (
            <>
              <p className="lg:flex hidden">Vagas disponíveis</p>
              <p className="block md:hidden">Vagas</p>
            </>
          )}
        </PageHeader.Title>
        <PageHeader.Actions>
          {pathname === "vagas" ? (
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
