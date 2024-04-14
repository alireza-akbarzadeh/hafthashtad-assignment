import type { Meta, StoryObj } from "@storybook/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion"

const meta: Meta<typeof Accordion> = {
  title: "Button",
  tags: ["autodocs"],
  component: Accordion,
  args: {
    children: "Button",
  },
  argTypes: {},
}

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: (args) => <Accordion {...args} />,
}

export default meta
