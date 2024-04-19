import localFont from "next/font/local"
import "styles/tailwind.css"

import { cn } from "lib/utils"

const iranSans = localFont({
  src: [
    {
      path: "../public/fonts/IRANSansWeb_Light.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/IRANSansWeb_Light.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/IRANSansWeb_Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/IRANSansWeb_Medium.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/IRANSansWeb_UltraLight.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/IRANSansWeb.ttf",
      weight: "300",
    },
  ],
})
type RootLayoutProptTypes = {
  children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProptTypes) {
  const { children } = props
  return (
    <html lang="en" dir="rtl" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background", iranSans.className)}>{children}</body>
    </html>
  )
}
