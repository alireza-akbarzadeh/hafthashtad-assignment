"use client"

import { useEffect } from "react"
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "components"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>We are sorry... something went wrong</CardTitle>
          <CardDescription>We cannot process your request at this moment.</CardDescription>
        </CardHeader>
        <CardContent>
          <CardFooter>
            <Button onClick={() => reset()}>Try again</Button>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  )
}
