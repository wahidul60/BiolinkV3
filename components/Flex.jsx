import React from 'react'

export default function Flex({children, className, ...props}) {
  return (
    <div className={`flex ${className}`} {...props}>
        {children}
    </div>
  )
}
