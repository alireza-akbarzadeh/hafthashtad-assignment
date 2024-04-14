import type { Meta, StoryObj } from "@storybook/react"
import { Skeleton } from "./Skeleton"

const meta: Meta<typeof Skeleton> = {
  title: "Ui/Skeleton",
  component: Skeleton,
}

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full bg-gray-400" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-[100px]  bg-gray-600" />
        <Skeleton className="h-8 w-[280px] bg-red-400" />
        <Skeleton className="h-8 w-[200px] bg-indigo-500" />
      </div>
    </div>
  ),
}

export default meta
