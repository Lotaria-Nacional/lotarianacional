import { Department } from "../constants/departments"

export type JobOppening = {
  id: number
  department: Department
  title: string
  description: string
  requirements: string[]
  responsabilities: string[]
  location?: string
  createdAt: Date
}
