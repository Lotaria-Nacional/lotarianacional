import axios from "@/lib/axios"

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
