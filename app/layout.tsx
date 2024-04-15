import "styles/tailwind.css"
import localFont from "next/font/local"
import { PropsWithChildren } from "react"

import { cn } from "lib/utils"

const iranSans = localFont({
  src: [
    {
      path: "../assets/IRANSansWeb_Black.ttf",
      weight: "400",
    },
    {
      path: "../assets/IRANSansWeb_Light.ttf",
      weight: "400",
    },
    {
      path: "../assets/IRANSansWeb_Bold.ttf",
      weight: "700",
    },
    {
      path: "../assets/IRANSansWeb_Medium.ttf",
      weight: "400",
    },
    {
      path: "../assets/IRANSansWeb_UltraLight.ttf",
      weight: "300",
    },
    {
      path: "../assets/IRANSansWeb.ttf",
      weight: "300",
    },
  ],
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" dir="rtl" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background", iranSans.className)}>{children}</body>
    </html>
  )
}
