import React from 'react'
import Menu from '../Menu/Menu'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
    </>
  )
}

export default Layout
