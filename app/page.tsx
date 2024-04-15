import { Metadata } from "next"
import { endpoint } from "constant/endpoint"
import { FlightList } from "entities/FlightList"
import createAPIClient from "services/api"
import { FlightListPage } from "./components/FlightList"

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

const getFlightList = async () => {
  const response = await createAPIClient(endpoint).get()
  return response.flightQueryResult[0]?.flightList || []
}

export default async function Web() {
  const flightList: FlightList[] = await getFlightList()
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <FlightListPage flightList={flightList} />
      </section>
    </>
  )
}
