import type { Meta, StoryObj } from "@storybook/react"

import { Button, ButtonProps } from "components/Button/Button"
import { SIZES, VARIANT } from "constant/themes"

type ButtonPageProps = React.ComponentProps<typeof Button> & {
  footer?: string
}

const meta = {
  component: Button,
  title: "Ui/Button",
  tags: ["autodocs"],
  args: { children: "button" },
  argTypes: {
    variant: {
      options: Object.keys(VARIANT),
      control: { type: "select" },
    },
    children: { control: "text" },
    fullWidth: { active: { control: "boolean" } },
    disabled: { control: "boolean" },
    asChild: { table: { disable: true } },
    size: {
      options: Object.keys(SIZES),
      control: { type: "select" },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<ButtonPageProps>

export default meta

type Story = StoryObj<ButtonPageProps>

export const ButtonDefaultArgs = {
  disabled: false,
} as ButtonProps

export const Default: Story = {
  args: {
    ...ButtonDefaultArgs,
  },
}

export const Destructive: Story = {
  args: {
    ...ButtonDefaultArgs,
    variant: "destructive",
  },
}

export const Ghost: Story = {
  args: {
    ...ButtonDefaultArgs,
    variant: "ghost",
  },
}
export const Link: Story = {
  render: (args) => (
    <Button asChild {...args} variant="link">
      <a href="@gmail.com">link to some where</a>
    </Button>
  ),
  args: {
    ...ButtonDefaultArgs,
    variant: "link",
  },
}
export const Secondary: Story = {
  args: {
    ...ButtonDefaultArgs,
    variant: "secondary",
  },
}
export const Outline: Story = {
  args: {
    ...ButtonDefaultArgs,
    variant: "outline",
  },
}
export const Info: Story = {
  args: {
    ...ButtonDefaultArgs,
    variant: "info",
  },
}

Info.parameters = {
  viewport: {
    viewports: "FHD",
  },
}
