import React from "react"
import { Badge } from "components/index"
import { FlightClassEnum } from "entities/FlightList"

type FlightClassPropType = {
  name: string
}

const flightClassMap: Record<string, JSX.Element | null> = {
  [FlightClassEnum.ECONOMY]: <Badge>اکونومی</Badge>,
  [FlightClassEnum.BUSINESS]: <Badge variant="warning">بیزینس</Badge>,
}

export const FlightClass = (props: FlightClassPropType): JSX.Element | null => {
  const { name } = props
  return flightClassMap[name] || null
}
