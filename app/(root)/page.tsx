import { Metadata } from "next"
import { FlightList } from "entities/FlightList"
import { getFlightList } from "services/getFlights"
import { Flights } from "./containers/Flights"

export const metadata: Metadata = {
  title: "hafthashtad assignment",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default async function Web() {
  const flightList: FlightList[] = await getFlightList()
  return (
    <section>
      <Flights flightList={flightList} />
    </section>
  )
}
