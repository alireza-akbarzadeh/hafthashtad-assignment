"use client"
import { ChangeEventHandler } from "react"
import { Input } from "components/index"

type FlightSearchPropTypes = {
  handleSeachFlight: ChangeEventHandler<HTMLInputElement>
  isPending: boolean
}

export const FlightSearch = (props: FlightSearchPropTypes) => {
  const { handleSeachFlight, isPending } = props

  return (
    <div className="w-full lg:max-w-[343px]">
      <Input
        onChange={handleSeachFlight}
        icon={{ name: isPending ? "Loader" : "Search", position: "end", size: "14px" }}
        className="rounded-3xl border border-gray-400 ring-1 ring-gray-400 focus-visible:ring-2"
        placeholder="جستجوی بلیط"
      />
    </div>
  )
}
