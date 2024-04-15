import { endpoint } from "constant/endpoint"
import createAPIClient from "./api"

export const getFlightList = async () => {
  const response = await createAPIClient(endpoint).get()
  return response.flightQueryResult[0]?.flightList || []
}
