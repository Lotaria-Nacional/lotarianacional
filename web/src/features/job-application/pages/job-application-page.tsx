import { Outlet, useLocation } from "react-router-dom"
import { PageBody } from "@/shared/components/layout/page-body"
import { PageHeader } from "@/shared/components/layout/page-header"
import ResellersFilter from "../components/reseller-oppenings-filter"
import SkilledStaffOppeningFilter from "../components/skilled-staff-oppenings-filter"

type PathNameOptions = "parceiro" | "vagas"

export default function JobApplicationPage() {
  const location = useLocation()
  const pathname = location.pathname.split("/")[2] as PathNameOptions

  return (
    <PageBody.Container>
      <PageHeader.Container>
        <PageHeader.Title className="normal-case">
          {pathname === "parceiro" ? "Torna-te parceiro" : "Vagas disponíveis"}
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
  )
}
