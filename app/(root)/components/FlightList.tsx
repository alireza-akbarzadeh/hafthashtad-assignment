import { differenceInMinutes } from "date-fns-jalali"
import { Icon } from "components/Icon/Icon"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  Separator,
} from "components/index"
import { CURRENCY_SYMBOL } from "constant"
import { FlightList as FlightListType } from "entities/FlightList"
import { FlightCode, formatTime, imageUrl } from "lib/utils"
import { Charter } from "./Charter"
import { FlightClass } from "./FlightClass"
import { FlightInfo } from "./FlightInfo"
import { Logo } from "./Logo"

export type FlightListPropsType = {
  flight: FlightListType
  index: number
}

export const FlightList = (props: FlightListPropsType): JSX.Element => {
  const { flight, index } = props
  const startDate = new Date(flight.departure.date * 1000)
  const endDate = new Date(flight.arrival.date * 1000)
  const formattedTime = differenceInMinutes(endDate, startDate)

  return (
    <Card className="card-shadow w-full rounded-lg">
      <Accordion collapsible type="single" className="w-full">
        <AccordionItem value={`item-${index + 1}`} className="border-none">
          <CardContent className="grid grid-cols-2 px-5 py-3 lg:grid-cols-12">
            <div className="col-span-2 lg:col-span-10">
              <div className="flex gap-1">
                <Charter isCharter={flight.isCharter} />
                <FlightClass name={flight.flightClass} />
              </div>
              <div className="mt-6 flex items-center justify-between gap-2 md:mr-12 md:justify-normal lg:gap-10">
                <div className="flex flex-col gap-2">
                  <Logo
                    src={imageUrl(flight.airline.code as FlightCode)}
                    alt={flight.airline.name}
                    fallBack={flight.airline.name.charAt(0)}
                  />
                  <p className="text-[14px] text-[#121516]">{flight.airline.name}</p>
                </div>
                <div className="gap:2 flex items-center md:gap-8">
                  <div className="flex flex-col gap-3">
                    <time dateTime={flight.departure.dateHourString} className=" text-lg text-[#121516] md:text-[26px]">
                      {flight.departure.dateHourString}
                    </time>
                    <span>{flight.departure.airport.city.name.farsi}</span>
                  </div>
                  <Icon name="MoveLeft" className="text-[#696A6B]" sizes="sm" />
                  <div className="flex flex-col gap-1">
                    <time dateTime={flight.arrival.dateHourString} className="text-lg text-[#121516] md:text-[26px]">
                      {flight.arrival.dateHourString}
                    </time>
                    <h4>{flight.arrival.airport.city.name.farsi}</h4>
                  </div>
                </div>
                <time className="whitespace-nowrap text-[14px] font-normal text-[#121516] lg:mr-20">
                  {formatTime(formattedTime)}
                </time>
              </div>
            </div>
            <div className="col-span-2  lg:col-span-2 lg:flex">
              <Separator
                className="ml-5 hidden h-full border-[1px]  border-dashed border-[#BCBEBE]  lg:block"
                orientation="vertical"
              />
              <Separator className=" mb-6 mt-3 bg-[#9D9F9F] lg:hidden " orientation="horizontal" />
              <div className="flex w-full flex-row justify-between gap-5 lg:flex-col">
                <p className="mb-5 text-[#D8000C]">{flight.remainingSeats} صندلی باقی مانده</p>
                <p className="text-[#121516]">
                  <span className="text-xl font-medium ">{flight.price.toLocaleString()}</span>
                  {CURRENCY_SYMBOL}
                </p>
                <AccordionTrigger headerClassName="hidden lg:block">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="text hidden rounded-full border-0  border-[#065BAA]  text-[14px]  font-medium text-[#065BAA] ring-2 ring-[#065BAA] hover:no-underline lg:flex"
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
