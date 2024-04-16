import React from "react"
import { Input } from "components/index"

export const FlightSearch = () => {
  return (
    <div className="max-w-[343px]">
      <Input
        icon={{ name: "Search", position: "end", sizes: "xs" }}
        className="rounded-3xl border border-gray-400 ring-1 ring-gray-400 focus-visible:ring-2"
        placeholder="جستجوی بلیط"
      />
    </div>
  )
}