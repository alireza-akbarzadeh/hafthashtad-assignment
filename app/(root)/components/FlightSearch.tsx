"use client"
import { ChangeEventHandler, RefObject } from "react"
import { Input } from "components/index"

type FlightSearchPropTypes = {
  handleSeachFlight: ChangeEventHandler<HTMLInputElement>
  isPending: boolean
  inputRef: RefObject<HTMLInputElement>
  searchValue: string
}

export const FlightSearch = (props: FlightSearchPropTypes) => {
  const { handleSeachFlight, isPending, inputRef, searchValue } = props

  return (
    <div className="w-full lg:max-w-[343px]">
      <Input
        ref={inputRef}
        value={searchValue}
        onChange={handleSeachFlight}
        icon={{ name: isPending ? "Loader" : "Search", position: "end", size: "14px" }}
        className="rounded-3xl border border-gray-400 ring-1 ring-gray-400 focus-visible:ring-2"
        placeholder="جستجوی بلیط"
      />
    </div>
  )
}
