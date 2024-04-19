import React from "react"

type LayoutPropsTpye = {
  children: React.ReactNode
}

function Layout(props: LayoutPropsTpye): JSX.Element {
  const { children } = props
  return <main className="max-w-full  px-3 lg:container sm:px-5  ">{children}</main>
}

export default Layout
