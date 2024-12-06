import React from 'react'

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ''}`}
    >
      {children}
    </div>
  )
}

Card.Header = function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`flex flex-col space-y-1.5 p-6 ${className || ''}`}>
      {children}
    </div>
  )
}

Card.Content = function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`p-6 pt-0 ${className || ''}`}>
      {children}
    </div>
  )
}
