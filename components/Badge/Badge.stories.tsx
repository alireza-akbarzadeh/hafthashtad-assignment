import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./Badge"

const meta: Meta<typeof Badge> = {
  title: "Button",
  tags: ["autodocs"],
  component: Badge,
  args: {
    children: "Button",
  },
  argTypes: {},
}

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: (args) => <Badge {...args} />,
}

export default meta
