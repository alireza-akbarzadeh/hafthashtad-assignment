import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./Badge"

const meta: Meta<typeof Badge> = {
  title: "Ui/Badge",
  tags: ["autodocs"],
  component: Badge,
  args: {
    children: "Badge",
  },
  argTypes: {
    className: { control: "text" },
  },
}

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: (args) => <Badge {...args} />,
}

export default meta
