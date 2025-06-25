import axios from "@/lib/axios"
import { EmissionEntity } from "../@types/emission.types"

export const getEmissions = async (): Promise<EmissionEntity[]> => {
  try {
    const emissions = await axios.get("/emissions")
    return emissions.data
  } catch (error) {
    throw error
  }
}
