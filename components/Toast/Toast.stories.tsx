import { ToastAction } from "@radix-ui/react-toast"
import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "components/Button/Button"

import { Toast } from "./toast"
import { Toaster } from "./toaster"
import { useToast } from "./use-toast"

const meta: Meta<typeof Toast> = {
  title: "Ui/Toast",
  component: Toast,
  decorators: [
    (story) => (
      <>
        <Toaster />
        {story()}
      </>
    ),
  ],
}

type Story = StoryObj<typeof Toast>

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { toast } = useToast()
    return (
      <Button
        onClick={() => {
          toast({
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }}
      >
        Show Toast
      </Button>
    )
  },
}
export const WithTitle: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { toast } = useToast()
    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
        }}
      >
        Show Toast
      </Button>
    )
  },
}

export const Destructive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { toast } = useToast()
    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        }}
      >
        Show Toast
      </Button>
    )
  },
}

export default meta
