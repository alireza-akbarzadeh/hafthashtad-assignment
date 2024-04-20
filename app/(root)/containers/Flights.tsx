"use client"

import { FlightList as FlightListType } from "entities/FlightList"

import { FlightList, FlightNotFound, FlightSearch, FlightSkeleton } from "../components"

import { useFlightsController } from "../Hooks/useFlightsController"

type FlightListPropsType = {
  flightList: FlightListType[]
}

export const Flights = (props: FlightListPropsType): JSX.Element => {
  const { flightList } = props
  const { handleTryAgain, isFlightExist, hasSearched, isPending, inputRef, searchValue, setSearchValue, flights } =
    useFlightsController({
      flightList,
    })

  return (
    <div className="mt-16 space-y-4">
      <FlightSearch
        inputRef={inputRef}
        isPending={isPending}
        searchValue={searchValue}
        handleSeachFlight={(e) => setSearchValue(e.target.value)}
      />
      {isPending ? (
        <FlightSkeleton />
      ) : isFlightExist ? (
        flights.map((flight, index) => <FlightList index={index} key={flight.flightID} flight={flight} />)
      ) : isFlightExist || hasSearched ? (
        <FlightNotFound searchValue={searchValue} handleTryAgain={handleTryAgain} />
      ) : null}
    </div>
  )
}
