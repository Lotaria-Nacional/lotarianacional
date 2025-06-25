export type AgencyEntity = {
    id: string
    name: string
    phone: number
    latitude: number
    longitude: number
    type:"lotaria-nacional" | "elephant-bet" | "arreiou"
    location_text: string
    createdAt: Date
  }
  