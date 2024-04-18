import React from "react"
import { Avatar, AvatarFallback, AvatarImage, AvatarProps } from "components/index"
import { cn } from "lib/utils"

interface LogoPropTypes extends AvatarProps {
  src: string
  fallBack: string
  alt: string
}

export const Logo = (props: LogoPropTypes) => {
  const { fallBack, alt, className, src, ...rest } = props
  return (
    <Avatar className={cn("broder-[#E8E9E8] h-12  w-12 border p-1 ", className)} {...rest}>
      {/* FIXME: search again see if you can find the image in server */}
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallBack}</AvatarFallback>
    </Avatar>
  )
}
