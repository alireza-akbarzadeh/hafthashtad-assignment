import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "./Card"

const meta: Meta<typeof Card> = {
  title: "Card",
  tags: ["autodocs"],
  component: Card,
  argTypes: {},
}

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: (args) => <Card {...args} />,
}

export default meta
