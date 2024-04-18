import React from "react"
import { Badge } from "components"
import { FlightClass as FlightClassEnum } from "entities/FlightList"

type FlightClassPropType = {
  name: string
}

export const FlightClass = (props: FlightClassPropType): JSX.Element | null => {
  const { name } = props
  return String(name) === FlightClassEnum.ECONOMY ? (
    <Badge>اکونومی</Badge>
  ) : String(name) === FlightClassEnum.BUSINESS ? (
    <Badge variant="warning">بیزینس</Badge>
  ) : null
}
