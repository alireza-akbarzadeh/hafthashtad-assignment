import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"

const meta: Meta<typeof Avatar> = {
  title: "Ui/Avatar",
  tags: ["autodocs"],
  component: Avatar,
  args: {},
  decorators: [(story) => <div className="w-[500px]">{story()}</div>],
  argTypes: {},
}

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="user" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const Group: Story = {
  decorators: [(story) => <div className="flex space-x-4">{story()}</div>],
  render: (args) => (
    <>
      <Avatar {...args}>
        <AvatarImage
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
        <AvatarFallback>CT</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarImage
          className="AvatarImage"
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          alt="Pedro Duarte"
        />
        <AvatarFallback>3D</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback>PD</AvatarFallback>
      </Avatar>
    </>
  ),
}

export default meta
