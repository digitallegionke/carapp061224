import React from 'react'

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`px-3 py-2 border rounded-md ${props.className || ''}`}
    />
  )
}
