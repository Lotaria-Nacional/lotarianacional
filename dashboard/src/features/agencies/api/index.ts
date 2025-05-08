import axios from "@/lib/axios"
import { AgencyEntity } from "../types"
import { PaginationParams } from "@/types/pagination-params"

export type CreateAgencyRequest = Omit<AgencyEntity, "id"|"createdAt">

export type GetAllAgenciesResponse = {
    data: AgencyEntity[]
    totalPages: number
    totalRecords: number
}

export type UpdateAgencyRequest =  Partial<CreateAgencyRequest> & {id:string}

/* ########## FUNCTIONS ############ */

export async function addAgency(data:CreateAgencyRequest):Promise<{message:string}>{
    const response = await axios.post("/agency", data)
    return response.data
}

export async function getAllAgencies({ page,pageSize }:PaginationParams):Promise<GetAllAgenciesResponse>{
    const response = await axios.get("/agencies", {params: { page,pageSize }})
    return response.data
  }

export async function getAgencyById(id: string): Promise<AgencyEntity> {
    const result = await axios.get(`/agency/${id}`)
    return result.data
}

export async function updateAgency (data: UpdateAgencyRequest): Promise<{ message: string }> {
  const response = await axios.put(`/agency/${data.id}`, data)
  return response.data
}

export async function deleteAgency (id: string): Promise<{ message: string }>  {
  const response = await axios.delete(`/agency/${id}`)
  return response.data
}