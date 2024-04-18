import React from "react"

import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "components/index"

type FlightNotFoundPropsType = {
  searchValue: string
  handleTryAgain: () => void
}

export const FlightNotFound = (props: FlightNotFoundPropsType) => {
  const { handleTryAgain, searchValue } = props
  return (
    <Card>
      <CardHeader>
        <CardTitle>هیچ پروازی پیدا نشد</CardTitle>
        <CardDescription className="pt-2">
          متأسفانه نتوانستیم هیچ پروازی که با جستجوی شما برای <span className="text-2xl underline">{searchValue}</span>{" "}
          مطابقت داشته باشد پیدا کنیم. لطفاً چیز دیگری را امتحان کنید.
        </CardDescription>
      </CardHeader>
      <CardContent>somthing else</CardContent>
      <CardFooter>
        <Button onClick={handleTryAgain}>دباره امتحان کنید</Button>
      </CardFooter>
    </Card>
  )
}
