import { AgencyEntity } from "@/features/agency/@types/agency.type";

export const defaultAgency: AgencyEntity = {
  id: "1",
  name: "Sede Lotaria Nacional",
  latitude: -8.813747300833915,
  longitude: 13.234881167766654,
  location_text: "Mutamba, Rua Rainha Ginga 79",
  phone: 923190007,
  type:"lotaria-nacional",
  createdAt: new Date(),
}
