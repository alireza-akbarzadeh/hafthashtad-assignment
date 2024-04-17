import { type ClassValue, clsx } from "clsx"

import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(minutes: number): string {
  const hours: number = Math.floor(minutes / 60)
  const remainingMinutes: number = minutes % 60

  const persianNumbers: string[] = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]

  const getPersianNumber = (num: number): string => {
    return num.toString().replace(/\d/g, (digit) => persianNumbers[Number.parseInt(digit)] || "")
  }

  if (hours === 0) {
    return `${getPersianNumber(remainingMinutes)} دقیقه`
  } else if (remainingMinutes === 0) {
    return `${getPersianNumber(hours)} ساعت`
  } else {
    return `${getPersianNumber(hours)} ساعت و ${getPersianNumber(remainingMinutes)} دقیقه`
  }
}

export type FlightCode = "ZH" | "ZV" | "NV" | "T3" | "IRU" | "EP"

export const logoUrls: Record<FlightCode, string> = {
  EP: "assets/logos/iran_air.png",
  ZH: "assets/logos/caspian.png",
  ZV: "assets/logos/iran_air.png",
  T3: "assets/logos/Sky.png",
  NV: "assets/logos/karun.png",
  IRU: "assets/logos/iran_air.png",
}

export function imageUrl(code: FlightCode): string {
  return logoUrls[code] || ""
}
