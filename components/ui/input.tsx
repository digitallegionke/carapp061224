import React from 'react'

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`px-3 py-2 border rounded-md ${props.className || ''}`}
    />
  )
}
