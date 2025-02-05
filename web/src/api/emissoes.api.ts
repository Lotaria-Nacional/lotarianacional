import axios from "@/config/axios"
import { IEmission } from "@/interfaces"

export const getEmissions = async (): Promise<IEmission[]> => {
  try {
    const emissions = await axios.get("/emissions")
         return emissions.data
  } catch (error) {
    throw error
  }
}
