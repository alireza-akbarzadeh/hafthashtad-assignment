import { differenceInMinutes } from "date-fns-jalali"
import React from "react"
import { Icon } from "components/icon/Icon"
import { Avatar, AvatarFallback, AvatarImage, Separator } from "components/index"
import { FlightClass } from "entities/FlightList"
import { FlightCode, formatTime, imageUrl } from "lib/utils"
import { FlightInfoPropsType } from "./FlightInfo"

type FlightDetailsPropTypes = FlightInfoPropsType

export const FlightDetails = (props: FlightDetailsPropTypes) => {
  const { flight } = props
  const startDate = new Date(flight.departure.date * 1000)
  const endDate = new Date(flight.arrival.date * 1000)
  const formattedTime = differenceInMinutes(endDate, startDate)
  return (
    <div className="m-5">
      <div className="mt-3 flex items-center justify-between  rounded-t-2xl  bg-[#EAF1F8] px-4 py-3">
        <div className="inline-flex gap-1">
          <span className="text-base font-medium text-[#065BAA]">{flight.departure.airport.city.name.farsi}</span>
          {"_"}
          <span className="text-base font-medium text-[#065BAA]">{flight.arrival.airport.city.name.farsi}</span>
        </div>
        <div>
          <span className="text-[14px] font-normal text-[#121516]">مدت سفر</span>
          {":"}
          <span className="text-[14px] font-normal text-[#121516]">{formatTime(formattedTime)}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Avatar className="m-4">
          {/* FIXME: search again see if you can find the image in server */}
          <AvatarImage src={imageUrl(flight.airline.code as FlightCode)} alt={flight.airline.name} />
          <AvatarFallback>{flight.airline.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <div className="inline-flex gap-2">
            <span className="text-base font-medium">
              {String(flight.flightClass) === FlightClass.ECONOMY
                ? "اکونومی"
                : String(flight.flightClass) === FlightClass.BUSINESS
                ? "بیزینس"
                : null}
            </span>
            <span className="text-base font-medium">{flight.airline.name}</span>
            <span className="text-base font-medium">{flight.airplaneModel}</span>
          </div>
          <ul className="flex items-center gap-3">
            <li className="inline-flex gap-1">
              <p className="text-[14px] text-[#696A6B]">شماره پرواز</p>
              {":"}
              <p className="text-[14px]  text-[#121516]">{flight.flightNumber}</p>
            </li>
            <li className="inline-flex gap-2">
              <p className="text-[14px] text-[#696A6B]">کلاس نرخی</p>
              {":"}
              <p className="text-[14px] text-[#121516]">{flight.fareClass}</p>
            </li>
            <li className="inline-flex gap-2">
              <p className="text-[14px] text-[#696A6B]">ترمینال</p>
              {":"}
              <p className=" text-[14px]text-[#121516]">- </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative ">
        <Separator
          className=" absolute h-[80%] border-spacing-y-6 border-[1px] border-dashed border-[#BCBEBE]  after:top-0 after:h-5 after:w-5 after:rounded-full after:bg-slate-400"
          orientation="vertical"
        />
        <div className="mr-4 mt-3 flex flex-col gap-5">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <p className="text-xl font-medium text-[#065BAA]">
                <span className="mr-2">{flight.departure.dateHourString}</span>
                <span className="mr-1">{flight.departure.airport.city.name.farsi}</span>
              </p>
              <span className="text-[14px]  font-normal text-[#121516] ">{flight.departure.dateString}</span>
            </div>
            <p className="flex gap-2 text-[14px] text-[#696A6B]">
              <span>{flight.departure.airport.name.farsi}</span>
              <span>{`(${flight.departure.airport.iata})`}</span>
            </p>
            <p className="text-[14px] font-normal text-[#696A6B]">{formatTime(formattedTime)}</p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <p className="text-xl font-medium text-[#065BAA]">
                <span className="mr-2">{flight.arrival.dateHourString}</span>
                <span className="mr-1">{flight.arrival.airport.city.name.farsi}</span>
              </p>
              <span className="text-[14px]  font-normal text-[#121516] ">{flight.arrival.dateString}</span>
            </div>
            <p className="flex gap-2 text-[14px] text-[#696A6B]">
              <span>{flight.arrival.airport.name.farsi}</span>
              <span>{`(${flight.arrival.airport.iata})`}</span>
            </p>
          </div>
        </div>
      </div>
      <ul className=" mt-[17.5px] space-y-6">
        {flight.allowedBaggage.map((allowed) => (
          <li className="flex items-center  text-[14px] text-[#D8000C]" key={allowed.code}>
            <Icon name="BaggageClaim" className="text-[#D8000C]" />
            <span className="">{allowed.name.farsi}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
