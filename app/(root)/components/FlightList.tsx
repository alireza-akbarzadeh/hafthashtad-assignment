import { differenceInMinutes } from "date-fns-jalali"
import { Icon } from "components/icon/Icon"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  Separator,
} from "components/index"
import { CURRENCY_SYMBOL } from "constant"
import { FlightClass, FlightList as FlightListType } from "entities/FlightList"
import { FlightCode, formatTime, imageUrl } from "lib/utils"
import { FlightInfo } from "./FlightInfo"

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
          <CardContent className="grid grid-cols-4 px-5 py-3 lg:grid-cols-12">
            <div className="col-span-10">
              <div className="flex gap-1">
                {flight.isCharter ? (
                  <Badge className="bg-[#EAF1F8] px-2 py-1">چارتری</Badge>
                ) : (
                  <Badge className="bg-[#F3F3F3] px-2 py-1">سیستمی</Badge>
                )}
                {String(flight.flightClass) === FlightClass.ECONOMY ? (
                  <Badge>اکونومی</Badge>
                ) : String(flight.flightClass) === FlightClass.BUSINESS ? (
                  <Badge variant="warning">بیزینس</Badge>
                ) : null}
              </div>
              <div className="mr-12 mt-6 flex items-center gap-10">
                <div className="flex flex-col  gap-2">
                  <Avatar>
                    {/* FIXME: search again see if you can find the image in server */}
                    <AvatarImage src={imageUrl(flight.airline.name as FlightCode)} alt={flight.airline.name} />
                    <AvatarImage src={"assets/logos/caspian.png"} alt={flight.airline.name} />
                    <AvatarFallback>{flight.airline.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <p className="text-[14px] text-[#121516]">{flight.airline.name}</p>
                </div>
                <div className="flex items-center  gap-10">
                  <div className="flex flex-col gap-3">
                    <span className="text-[26px] text-[#121516]">{flight.departure.dateHourString}</span>
                    <span>{flight.departure.airport.city.name.farsi}</span>
                  </div>
                  <Icon name="MoveLeft" className="text-[#696A6B]" sizes="sm" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[26px] text-[#121516]">{flight.arrival.dateHourString}</span>
                    <span>{flight.arrival.airport.city.name.farsi}</span>
                  </div>
                </div>
                <p className="mr-20 text-[14px] font-normal text-[#121516]">{formatTime(formattedTime)}</p>
              </div>
            </div>
            <div className="col-span-2 flex">
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
                    className="text  rounded-full  border-0  border-[#065BAA] text-[14px] font-medium text-[#065BAA] ring-2 ring-[#065BAA]"
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
