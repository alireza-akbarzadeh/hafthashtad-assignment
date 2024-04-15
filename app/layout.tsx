import "styles/tailwind.css"
import { Inter as FontSans } from "next/font/google"
import { PropsWithChildren } from "react"
import { cn } from "lib/utils"

const fontSans = FontSans({
  subsets: ["vietnamese", "latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" dir="rtl" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>{children}</body>
    </html>
  )
}
