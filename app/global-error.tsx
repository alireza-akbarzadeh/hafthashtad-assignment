"use client"

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

export type GlobalErrorPropsType = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError(props: GlobalErrorPropsType): JSX.Element {
  const { error, reset } = props
  return (
    <html>
      <body>
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
      </body>
    </html>
  )
}
