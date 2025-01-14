import { IAgency } from "../interfaces"

export function filterAgenciesBySearchParams(
  params: string,
  agencies?: IAgency[]
) {
  if (!agencies) return

  return params === ""
    ? agencies
    : agencies.filter(
        (agency) => agency.name.charAt(0).toLowerCase() === params
      )
}
