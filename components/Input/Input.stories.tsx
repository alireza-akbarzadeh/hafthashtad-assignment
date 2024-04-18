import { Meta, StoryObj } from "@storybook/react"
import { VARIANT } from "constant/themes"
import { Input } from "./Input"

const InputStories: Meta<typeof Input> = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    name: "somthing",
    disabled: false,
    required: false,
    label: "Field",
    placeholder: "Enter Somthing....",
  },
  argTypes: {
    name: { control: "text" },
    value: { control: "text" },
    label: { control: "text" },
    disabled: { control: "boolean" },
    variant: { control: "select", options: Object.keys(VARIANT) },
    required: { control: "boolean" },
    type: { control: "select", options: ["text", "email"] },
  },
  parameters: {
    layout: "centered",
  },
}

export default InputStories

type Story = StoryObj<typeof Input>

export const Email: Story = {
  args: {
    name: "email",
    type: "email",
    id: "email",
  },
}

export const TextField: Story = {
  args: {
    name: "userName",
    type: "text",
    id: "email",
    fullWidth: true,
  },
}

export const Password: Story = {
  args: {
    name: "userName",
    className: "w-[400px] mt-2",
    type: "password",
    id: "email",
    fullWidth: true,
    icon: { name: "Eye", position: "start", className: "mt-4" },
  },
}
