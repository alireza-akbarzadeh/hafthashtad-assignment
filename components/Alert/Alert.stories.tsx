import type { Meta, StoryObj } from "@storybook/react"
import { Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "./Alert"

const meta: Meta<typeof Alert> = {
  title: "Ui/Alert",
  tags: ["autodocs"],
  component: Alert,
}

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <Info className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  ),
}

export default meta
