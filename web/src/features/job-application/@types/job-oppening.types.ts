export type JobOppening = {
  id: number
  department: string
  title: string
  description: string
  requirements: string[]
  responsabilities: string[]
  location?: string
  createdAt: Date
}
