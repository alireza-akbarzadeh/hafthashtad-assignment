import type { Meta, StoryObj } from "@storybook/react"
import { Skeleton } from "./Skeleton"

const meta: Meta<typeof Skeleton> = {
  title: "Card",
  tags: ["autodocs"],
  component: Skeleton,
  argTypes: {},
}

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: (args) => <Skeleton {...args} />,
}

export default meta
