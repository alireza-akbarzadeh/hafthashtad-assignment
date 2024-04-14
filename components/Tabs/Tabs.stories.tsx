import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "components/Button/Button"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "components/Card/Card"
import { Input } from "components/Input/Input"
import { Label } from "components/Label/Label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/Tabs/Tabs"

const meta: Meta<typeof Tabs> = {
  title: "Ui/Tabs",
  tags: ["autodocs"],
  component: Tabs,
  args: { defaultValue: "account" },
  argTypes: {
    value: {
      options: ["account", "password"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: (args) => (
    <Tabs className="w-[500px]" {...args}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader className="gap-2">
            <CardTitle>Account</CardTitle>
            <CardDescription>Make changes to your account here. Click save when you re done.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader className="gap-2">
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password here. After saving, you ll be logged out.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

export default meta
