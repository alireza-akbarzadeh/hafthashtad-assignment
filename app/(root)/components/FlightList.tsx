"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion"
import { Icon } from "components/icon/Icon"
import { Button, Card, CardContent, Separator } from "components/index"
import { FlightList as FlightListType } from "entities/FlightList"

type FlightListPropsType = {
  flight: FlightListType
  index: number
}

export const FlightList = (props: FlightListPropsType) => {
  const { flight, index } = props

  return (
    <Card className="card-shadow rounded-lg py-4">
      <Accordion collapsible type="single" className="w-full">
        <AccordionItem value={`item-${index}`}>
          <CardContent className="grid grid-cols-12">
            <div className="col-span-10">
              <div className="flex space-x-3">{flight.flightClass}</div>
              <p>{flight.airline.name}</p>
            </div>
            <div className="col-span-2 flex">
              <Separator className="ml-5 h-full border-gray-500" orientation="vertical" />
              <div className="flex flex-col gap-5">
                <p className="mb-5 text-[#D8000C]">{flight.remainingSeats} صندلی باقی مانیده</p>
                <p>{flight.price.toLocaleString()}ریال</p>
                <AccordionTrigger>
                  <Button
                    asChild
                    fullWidth
                    variant="outline"
                    className="text rounded-full border-[#065BAA] p-3 py-4 text-[14px] font-medium text-[#065BAA] ring-2 ring-[#065BAA]"
                  >
                    <div>
                      <span>مشاهده جزئیات و خرید</span>
                      <Icon className="text-[#065BAA]" name="ChevronDown" sizes="xs" />
                    </div>
                  </Button>
                </AccordionTrigger>
              </div>
            </div>
          </CardContent>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}
