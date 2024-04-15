"use client"
import { FlightList } from "entities/FlightList"

interface IFlightListProp {
  flightList: FlightList[]
}

export const FlightListPage = (props: IFlightListProp) => {
  const { flightList } = props

  console.log(flightList)
  return <div>{flightList?.map((flight) => <div key={flight.flightID}>{flight.airline.name}</div>)}</div>
}
