import React from "react"

type LayoutPropsTpye = {
  children: React.ReactNode
}

function Layout({ children }: LayoutPropsTpye) {
  return <main className="container">{children}</main>
}

export default Layout
