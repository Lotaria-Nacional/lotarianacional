import axios from "@/config/axios"

export const recruitCandidate = async (data: FormData):Promise<{message:string}> => {
  const response = await axios.post("/recruitment", data)
  return response.data
}
