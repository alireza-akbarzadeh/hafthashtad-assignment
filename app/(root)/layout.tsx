import React from "react"
import { Toaster } from "components/Toast/toaster"

type LayoutPropsTpye = {
  children: React.ReactNode
}

function Layout(props: LayoutPropsTpye): JSX.Element {
  const { children } = props
  return (
    <main className="max-w-full  px-3 lg:container sm:px-5  ">
      {children}
      <Toaster />
    </main>
  )
}

export default Layout
