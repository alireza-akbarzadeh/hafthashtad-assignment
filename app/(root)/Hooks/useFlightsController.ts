"use client"

import { RefObject, useEffect, useRef, useState } from "react"
import { FlightList as FlightListType } from "entities/FlightList"
import { useDebounce } from "hooks/index"

type UseFlightsControllerArgsType = {
  flightList: FlightListType[]
}
type UseFlightsControllerReturnType = {
  inputRef: RefObject<HTMLInputElement>
  flights: FlightListType[]
  isFlightExist: boolean
  isPending: boolean
  hasSearched: boolean
  searchValue: string
  handleTryAgain: () => void
  setSearchValue: (search: string) => void
}

export const useFlightsController = (args: UseFlightsControllerArgsType): UseFlightsControllerReturnType => {
  const { flightList } = args

  const [flights, setFlights] = useState<FlightListType[]>([])
  const [searchValue, setSearchValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearchFlight = (searchQuery: string) => {
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
  }

  const [isPending, debouncedSearchFlights] = useDebounce(handleSearchFlight, 1000) // Debounce search value with a delay of 300 ms

  useEffect(() => {
    debouncedSearchFlights(searchValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  const isFlightExist = flights.length > 0 // Check if a flight exist
  const hasSearched = searchValue.trim() !== "" // Check if a search has been performed

  const handleTryAgain = () => {
    setSearchValue("")
    setFlights(flightList.slice(0, 5))
    inputRef.current?.focus()
  }
  return { isFlightExist, hasSearched, isPending, handleTryAgain, inputRef, searchValue, setSearchValue, flights }
}
