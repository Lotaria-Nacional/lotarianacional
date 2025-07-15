export type JobOppening = {
  id: string
  title: string
  requirements: string[]
  department: string
  quantity: number
  createdAt: Date
}

export type PartnerJobOppening = {
  id: string
  title: string
  requirements: string[]
  location: string
  type: string
  quantity: number
  createdAt: Date
}
