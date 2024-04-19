import { endpoint } from "constant/endpoint"
import createAPIClient from "./api"

export const getFlightList = async () => {
  try {
    const response = await createAPIClient(endpoint).get()
    return response.flightQueryResult[0]?.flightList || []
  } catch (error) {
    console.error("Error fetching flight list:", error)
    throw new Error("Failed to fetch flight list")
  }
}
