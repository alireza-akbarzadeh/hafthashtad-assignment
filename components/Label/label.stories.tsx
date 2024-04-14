import type { Meta, StoryObj } from "@storybook/react"
import { Card, CardContent } from "components/Card/Card"
import { Input } from "components/Input/Input"
import { Label, LabelProps } from "components/Label/Label"

const meta: Meta<typeof Label> = {
  component: Label,
  title: "Forms/Label",
  tags: ["autodocs"],
  args: { children: "your email Address here", htmlFor: "email" },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof Label>

const labelDefaultArgs = {
  fullWidth: true,
} as LabelProps

export const Default: Story = {
  args: {
    ...labelDefaultArgs,
  },
}

export const LabelCheked: Story = {
  args: {
    ...labelDefaultArgs,
  },
  decorators: [
    (story) => (
      <Card>
        <CardContent className="flex space-x-2">
          <Label htmlFor="email" />
          <Input id="email" />
          {story()}
        </CardContent>
      </Card>
    ),
  ],
}
