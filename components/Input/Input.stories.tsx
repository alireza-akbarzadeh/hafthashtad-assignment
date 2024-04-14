import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./Input"

const meta: Meta<typeof Input> = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
}

type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: (args) => <Input {...args} />,
}

export default meta
