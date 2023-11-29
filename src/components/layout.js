import React from 'react'

const Layout = ({className, children}) => {
  return (
    <div className={`w-full h-full inline-block bg-light p-32 ${className}`}>{children}</div>
  )
}

export default Layout;