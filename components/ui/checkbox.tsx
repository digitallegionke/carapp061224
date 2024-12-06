import React from 'react'

export function Checkbox(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      {...props}
      className={`form-checkbox h-4 w-4 ${props.className || ''}`}
    />
  )
}
