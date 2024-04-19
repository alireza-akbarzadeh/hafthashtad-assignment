"use client"

import { useEffect } from "react"
import { GlobalErrorPropsType } from "app/global-error"
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "components/index"
import { useToast } from "components/Toast/use-toast"

type ErrorPropsType = GlobalErrorPropsType

export default function Error(props: ErrorPropsType): JSX.Element {
  const { error, reset } = props
  const { toast } = useToast()

  useEffect(() => {
    console.error(error)
  }, [error])

  if (error) {
    toast({
      title: "Ops!!!",
      description: error.message,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>We are sorry... something went wrong</CardTitle>
        <CardDescription>We cannot process your request at this moment.</CardDescription>
      </CardHeader>
      <CardContent>
        <Alert>
          <AlertTitle>Error:</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
        <CardFooter>
          <Button onClick={() => reset()}>Try again</Button>
        </CardFooter>
      </CardContent>
    </Card>
  )
}
