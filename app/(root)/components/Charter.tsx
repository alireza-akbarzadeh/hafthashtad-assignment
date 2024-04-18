import React from "react"
import { Badge } from "components/index"

type CharterPropTypes = {
  isCharter: boolean
}

export const Charter = (props: CharterPropTypes): JSX.Element => {
  const { isCharter } = props
  return isCharter ? (
    <Badge className="bg-[#EAF1F8] px-2 py-1">چارتری</Badge>
  ) : (
    <Badge className="bg-[#F3F3F3] px-2 py-1">سیستمی</Badge>
  )
}
