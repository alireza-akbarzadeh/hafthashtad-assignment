import React from "react"
import { Button, Separator, Tabs, TabsContent, TabsList, TabsTrigger } from "components/index"

export const FlightInfo = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-8">
        <Tabs defaultValue="details">
          <TabsList className="flex flex-row  border-b">
            <TabsTrigger value="details">جزییات پرواز</TabsTrigger>
            <TabsTrigger value="rules">قوانین استرداد </TabsTrigger>
          </TabsList>
          <TabsContent value="details">content 1</TabsContent>
          <TabsContent value="rules">content 2</TabsContent>
        </Tabs>
      </div>
      <div className="col-span-4 space-y-5 px-5">
        <h3>جزئیات قیمت</h3>
        <Separator orientation="horizontal" className="my-1" />
        <div className="flex justify-between">
          <p> بزرگ سال</p>
          <p> ۴۰۰۰۰ ریال</p>
        </div>
        <Separator orientation="horizontal" className="my-1" />
        <div className="flex justify-between">
          <p>مجموع قیمت رفت و برگشت</p>
          <p> ۱۸,۰۰۰,000 ریال</p>
        </div>
        <Button variant="info" fullWidth className="rounded-full">
          انتخاب بلیط و افزودن مسافر
        </Button>
      </div>
    </div>
  )
}
