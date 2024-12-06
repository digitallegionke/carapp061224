import React from 'react'

export function Slider(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="range"
      {...props}
      className={`w-full ${props.className || ''}`}
    />
  )
}
