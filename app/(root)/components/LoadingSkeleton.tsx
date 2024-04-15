import React from "react"
import { Skeleton } from "components"

export const LoadingSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full bg-gray-400" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-[100px]  bg-gray-600" />
        <Skeleton className="h-8 w-[200px] bg-indigo-500" />
        <Skeleton className="h-8 w-[280px] bg-red-400" />
      </div>
    </div>
  )
}
