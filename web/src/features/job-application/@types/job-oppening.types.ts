export type JobOppening = {
  id: string
  department: string
  title: string
  quantity: number
  description?: string
  requirements: string[]
  responsabilities: string[]
  createdAt: Date
}

export type PartnerJobOppening = {
  id: string
  title: string
  type: string
  quantity: number
  description?: string
  requirements: string[]
  responsabilities: string[]
  location: string
  createdAt: Date
}
