import axios from "@/lib/axios"
import { JobOppening, PartnerJobOppening } from "../@types/job-oppening.types"

export const sendApplicationSkilledStaff = async (
  data: FormData
): Promise<{ message: string }> => {
  const response = await axios.post("/candidaturas/skilled-staff", data)
  return response.data
}

export const sendApplicationReseller = async (
  data: FormData
): Promise<{ message: string }> => {
  const response = await axios.post("/candidaturas/reseller", data)
  return response.data
}

export type ReturnJobsType<T> = {
  totalRecords:number
  totalPages:number
  data:T[]
}

export const fetchManyOppeningJobs = async (filter?:string)=> {
  const params = new URLSearchParams()
  
  if(filter){
      params.set("slug", filter)
  }

  const response = await axios.get<ReturnJobsType<JobOppening>>(`/vagas?${params}` )
  return response.data
}

export const getOppeningJobs = async (id:string)=> {
  const response = await axios.get<JobOppening>(`/vagas/${id}`)
  return response.data
}

export const fetchManyPartnerOppeningJobs = async (filter?:string)=> {
  const params = new URLSearchParams()

  if(filter){
    params.set("slug", filter)
  }
  
  const response = await axios.get<ReturnJobsType<PartnerJobOppening>>(`/vagas/revendedor?${params}`)
  return response.data
}

export const getPartnerOppeningJobs = async (id:string)=> {
  const response = await axios.get<PartnerJobOppening>(`/vagas/revendedor/${id}`)
  
  return response.data
}