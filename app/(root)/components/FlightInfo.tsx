import React from "react"
import { Button, Separator, Tabs, TabsContent, TabsList, TabsTrigger } from "components/index"
import { CURRENCY_SYMBOL } from "constant"
import { FlightDetails } from "./FlightDetails"
import { FlightListPropsType } from "./FlightList"
import { FlightRules } from "./FlightRules"

export type FlightInfoPropsType = Omit<FlightListPropsType, "index">

export const FlightInfo = (props: FlightInfoPropsType) => {
  const { flight } = props
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-8">
        <Tabs defaultValue="details">
          <TabsList className="flex flex-row  border-b">
            <TabsTrigger value="details">جزییات پرواز</TabsTrigger>
            <TabsTrigger value="rules">قوانین استرداد </TabsTrigger>
          </TabsList>
          <TabsContent style={{ direction: "rtl" }} value="details">
            <FlightDetails flight={flight} />
          </TabsContent>
          <TabsContent style={{ direction: "rtl" }} value="rules">
            <FlightRules />
          </TabsContent>
        </Tabs>
      </div>
      <div className="col-span-4 space-y-5 px-5">
        <h3>جزئیات قیمت</h3>
        <Separator orientation="horizontal" className="my-1" />
        <div className="flex justify-between">
          <p>بزرگ سال (۱۲ سال به بالا) </p>
          <p> ۴۰۰۰۰ ریال</p>
        </div>
        <Separator orientation="horizontal" className="my-1" />
        <div className="flex justify-between">
          <p>مجموع قیمت رفت و برگشت</p>
          {/* totalprops not exist in given data ny provider */}
          <p>
            {" "}
            {parseInt("18000000").toLocaleString()} {CURRENCY_SYMBOL}
          </p>
        </div>
        <Button variant="info" fullWidth className="rounded-full">
          انتخاب بلیط و افزودن مسافر
        </Button>
      </div>
    </div>
  )
}
