import React from 'react'

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`px-3 py-2 border rounded-md ${props.className || ''}`}
    />
  )
}
