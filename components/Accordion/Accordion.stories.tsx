import type { Meta, StoryObj } from "@storybook/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion"

const meta: Meta<typeof Accordion> = {
  title: "Ui/Accordion",
  tags: ["autodocs"],
  component: Accordion,
  args: {
    type: "single",
    collapsible: true,
  },
  decorators: [(story) => <div className="w-[500px]">{story()}</div>],
  argTypes: {
    type: {
      options: ["single", "multiple"],
      control: { type: "radio" },
    },
    collapsible: {
      control: { type: "boolean" },
    },
  },
}

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: (args) => (
    <Accordion className="w-full" {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export default meta
