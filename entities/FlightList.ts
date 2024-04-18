export interface FlightList {
  price: number
  remainingSeats: number
  isCharter: boolean
  airline: {
    code: string
    name: string
  }
  flightClass: string
  numberOfStops: number
  totalStopDuration: number
  departure: {
    date: number
    dateString: string
    dateHourString: string
    terminal: string
    airport: {
      country: {
        twoLetterCode: string
        code: string
        name: {
          farsi: string
          english: string
        }
      }
      city: {
        name: {
          farsi: string
          english: string
        }
        iata: string
      }
      name: {
        farsi: string
        english: string
      }
      iata: string
    }
  }
  arrival: {
    date: number
    dateString: string
    dateHourString: string
    terminal: string
    airport: {
      country: {
        twoLetterCode: string
        code: string
        name: {
          farsi: string
          english: string
        }
      }
      city: {
        name: {
          farsi: string
          english: string
        }
        iata: string
      }
      name: {
        farsi: string
        english: string
      }
      iata: string
    }
  }
  flightID: string
  airplaneModel: string
  promotion: any // Adjust this type according to the actual data structure
  flightNumber: string
  fare: {
    adult: number
    child: number
    infant: number
  }
  fareClass: string
  options: any[] // Adjust this type according to the actual data structure
  priority: number
  allowedBaggage: {
    code: string
    name: {
      farsi: string
      english: string
    }
    count: number
    weight: number
    adultAndChildWeight: number
    infantWeight: number
  }[]
  refundPolicy: {
    Text: string
    Percent: number
  }[]
  commission: number
  agency: string
}

export interface FlightQueryResult {
  flightQueryResult: {
    flightList: FlightList[]
  }[]
}

export enum FlightClassEnum {
  ECONOMY = "ECONOMY",
  BUSINESS = "BUSINESS",
}
