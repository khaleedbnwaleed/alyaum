import React from 'react'

const Layout = ({ children, className = '' }) => {
  return (
    <div className={`w-full min-h-screen bg-light pt-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-12 md:px-6 sm:px-4">
        {children}
      </div>
    </div>
  )
}

export default Layout
