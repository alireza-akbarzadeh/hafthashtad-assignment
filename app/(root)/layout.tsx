import React from "react"

type LayoutPropsTpye = {
  children: React.ReactNode
}

function Layout({ children }: LayoutPropsTpye) {
  return (
    <main>
      <div className="container">{children}</div>
    </main>
  )
}

export default Layout
