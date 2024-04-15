import axios, { AxiosRequestConfig } from "axios"
import { FlightQueryResult } from "entities/FlightList"

function createAPIClient(endpoint: string) {
  const get = (config?: AxiosRequestConfig) => axios.get<FlightQueryResult>(endpoint, config).then((res) => res.data)

  return {
    get,
  }
}

export default createAPIClient
