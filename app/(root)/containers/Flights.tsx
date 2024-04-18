"use client"

import { useEffect, useState } from "react"
import { FlightList as FlightListType } from "entities/FlightList"
import { useDebounce } from "hooks"
import { FlightList } from "../components/FlightList"
import { FlightSearch } from "../components/FlightSearch"
import { LoadingSkeleton } from "../components/LoadingSkeleton"

type FlightListPropsType = {
  flightList: FlightListType[]
}

export const Flights = ({ flightList }: FlightListPropsType) => {
  const [flights, setFlights] = useState<FlightListType[]>([])
  const [searchValue, setSearchValue] = useState("")
  const [isPending, setIsPending] = useState<boolean>(false)

  const debouncedSearchFlights = useDebounce((searchQuery: string) => {
    setIsPending(true)
    if (searchQuery.trim() === "") {
      setFlights(flightList.slice(0, 5))
    } else {
      const filteredFlights = flightList.filter(
        (flight) =>
          flight.airline.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          flight.flightID.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFlights(filteredFlights)
    }
    setIsPending(false)
  }, 300) // Debounce search value with a delay of 300 ms

  useEffect(() => {
    debouncedSearchFlights(searchValue)
  }, [debouncedSearchFlights, searchValue])

  const isFlightExist = flights.length > 0

  return (
    <div className="mt-16 space-y-4">
      <FlightSearch isPending={isPending} handleSeachFlight={(e) => setSearchValue(e.target.value)} />
      {isPending ? (
        <LoadingSkeleton />
      ) : isFlightExist ? (
        flights.map((flight, index) => <FlightList index={index} key={flight.flightID} flight={flight} />)
      ) : (
        <p>Flight not found</p>
      )}
    </div>
  )
}
