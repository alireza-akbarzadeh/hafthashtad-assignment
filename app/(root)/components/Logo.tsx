import React from "react"
import { Avatar, AvatarFallback, AvatarImage, AvatarProps } from "components/index"
import { cn } from "lib/utils"

interface LogoPropTypes extends AvatarProps {
  src: string
  alt: string
  fallBack: string
}

export const Logo = (props: LogoPropTypes): JSX.Element => {
  const { fallBack, alt, className, src, ...rest } = props
  return (
    <Avatar className={cn("broder-[#E8E9E8] h-12  w-12 border p-1 ", className)} {...rest}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallBack}</AvatarFallback>
    </Avatar>
  )
}
