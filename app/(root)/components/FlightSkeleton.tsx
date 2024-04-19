import React from "react"
import { Card, CardContent } from "components/index"
import { Skeleton } from "components/Skeleton/Skeleton"

export const FlightSkeleton = (): JSX.Element[] => {
  return Array.from({ length: 5 }).map((index) => (
    <Card key={index as number}>
      <CardContent className="grid grid-cols-2 gap-4 lg:grid-cols-12">
        <div className="col-span-2 flex flex-col lg:col-span-10">
          <div className="flex items-center gap-2">
            <Skeleton className="h-12 w-16 rounded-md bg-gray-400" />
            <Skeleton className="h-12 w-16 rounded-md bg-gray-400" />
          </div>
          <div className="m-5 flex items-center gap-3">
            <Skeleton className="h-12 w-12 rounded-full bg-gray-400" />
            <Skeleton className="h-12 w-20 rounded-sm bg-gray-400" />
            <Skeleton className="h-12 w-20 rounded-sm bg-gray-400" />
            <Skeleton className="h-12 w-24 rounded-sm bg-gray-400" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col  gap-4">
            <Skeleton className="mx-auto h-5 w-[80%] rounded-sm bg-gray-400" />
            <Skeleton className="mx-auto h-5 w-[80%] rounded-sm bg-gray-400" />
            <Skeleton className="h-12 w-full rounded-xl bg-gray-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  ))
}
