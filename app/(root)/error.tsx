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
        <CardTitle>متاسفیم... مشکلی پیش آمده است</CardTitle>
        <CardDescription>در حال حاضر نمی‌توانیم درخواست شما را پردازش کنیم.</CardDescription>
      </CardHeader>
      <CardContent>
        <Alert>
          <AlertTitle>خطا:</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
        <CardFooter>
          <Button onClick={() => reset()}>دوباره امتحان کنید</Button>
        </CardFooter>
      </CardContent>
    </Card>
  )
}
