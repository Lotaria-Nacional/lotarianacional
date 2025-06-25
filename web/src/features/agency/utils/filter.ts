import { AgencyEntity } from "../@types/agency.type"

export function filterAgenciesBySearchParams(
  params: string,
  agencies?: AgencyEntity[]
) {
  if (!agencies) return []

  return params === ""
    ? agencies
    : agencies.filter(
        (agency) => agency.name.charAt(0).toLowerCase() === params
      )
}
