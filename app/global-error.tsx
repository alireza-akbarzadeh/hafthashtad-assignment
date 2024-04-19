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
      </body>
    </html>
  )
}
