import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen justify-center flex mx-auto items-center gradient-blue">{children}</main>
  )
}

export default Layout