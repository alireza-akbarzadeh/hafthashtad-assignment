import { differenceInMinutes } from "date-fns-jalali"
import { Icon } from "components/Icon/Icon"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
  CardContent,
  Separator,
} from "components/index"
import { CURRENCY_SYMBOL } from "constant"
import { FlightList as FlightListType } from "entities/FlightList"
import { FlightCode, formatTime, imageUrl } from "lib/utils"
import { FlightClass } from "./FlightClass"
import { FlightInfo } from "./FlightInfo"
import { Logo } from "./Logo"

export type FlightListPropsType = {
  flight: FlightListType
  index: number
}

export const FlightList = (props: FlightListPropsType) => {
  const { flight, index } = props
  const startDate = new Date(flight.departure.date * 1000)
  const endDate = new Date(flight.arrival.date * 1000)
  const formattedTime = differenceInMinutes(endDate, startDate)

  return (
    <Card className="card-shadow rounded-lg">
      <Accordion collapsible type="single" className="w-full">
        <AccordionItem value={`item-${index}`} className="border-none">
          <CardContent className="grid grid-cols-2 px-5 py-3 lg:grid-cols-12">
            <div className="col-span-2 lg:col-span-10">
              <div className="flex gap-1">
                {flight.isCharter ? (
                  <Badge className="bg-[#EAF1F8] px-2 py-1">چارتری</Badge>
                ) : (
                  <Badge className="bg-[#F3F3F3] px-2 py-1">سیستمی</Badge>
                )}
                <FlightClass name={flight.flightClass} />
              </div>
              <div className="mr-12 mt-6 flex items-center gap-10">
                <div className="flex flex-col  gap-2">
                  <Logo
                    src={imageUrl(flight.airline.code as FlightCode)}
                    alt={flight.airline.name}
                    fallBack={flight.airline.name.charAt(0)}
                  />
                  <p className="text-[14px] text-[#121516]">{flight.airline.name}</p>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex flex-col gap-3">
                    <time dateTime={flight.departure.dateHourString} className="text-[26px] text-[#121516]">
                      {flight.departure.dateHourString}
                    </time>
                    <span>{flight.departure.airport.city.name.farsi}</span>
                  </div>
                  <Icon name="MoveLeft" className="text-[#696A6B]" sizes="sm" />
                  <div className="flex flex-col gap-1">
                    <time dateTime={flight.arrival.dateHourString} className="text-[26px] text-[#121516]">
                      {flight.arrival.dateHourString}
                    </time>
                    <span>{flight.arrival.airport.city.name.farsi}</span>
                  </div>
                </div>
                <time className="mr-20 text-[14px] font-normal text-[#121516]">{formatTime(formattedTime)}</time>
              </div>
            </div>
            <div className="col-span-2 flex lg:col-span-2">
              <Separator className="ml-5 h-full  border-[1px] border-dashed border-[#BCBEBE]" orientation="vertical" />
              <div className="flex flex-col gap-5">
                <p className="mb-5 text-[#D8000C]">{flight.remainingSeats} صندلی باقی مانده</p>
                <p>
                  {flight.price.toLocaleString()}
                  {CURRENCY_SYMBOL}
                </p>
                <AccordionTrigger>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="text rounded-full  border-0  border-[#065BAA]  text-[14px] font-medium text-[#065BAA] ring-2 ring-[#065BAA] hover:no-underline"
                  >
                    <div>
                      <span>مشاهده جزئیات و خرید</span>
                      <Icon className="text-[#065BAA]" name="ChevronDown" />
                    </div>
                  </Button>
                </AccordionTrigger>
              </div>
            </div>
          </CardContent>
          <AccordionContent>
            <FlightInfo flight={flight} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}
