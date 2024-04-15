"use client"
import { FlightList as FlightListType } from "entities/FlightList"
import { FlightList } from "../components/FlightList"
import { FlightSearch } from "../components/FlightSearch"

type FlightListPropsType = {
  flightList: FlightListType[]
}

export const Flights = (props: FlightListPropsType) => {
  const { flightList } = props

  return (
    <div className="mt-16 space-y-4">
      <FlightSearch />
      {flightList?.map((flight, index) => <FlightList index={index} key={flight.flightID} flight={flight} />)}
    </div>
  )
}
