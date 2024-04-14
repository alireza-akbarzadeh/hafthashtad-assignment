import type { Meta, StoryObj } from "@storybook/react"
import { Tabs } from "./Tabs"

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  tags: ["autodocs"],
  component: Tabs,
  argTypes: {},
}

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: (args) => <Tabs {...args} />,
}

export default meta
