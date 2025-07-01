import axios from "@/lib/axios"

export const recruitCandidate = async (data: FormData):Promise<{message:string}> => {
  const response = await axios.post("/candidatura", data)
  return response.data
}
