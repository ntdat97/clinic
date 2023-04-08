import React from 'react'

interface TransitionTextProps {
  children: React.ReactNode
}

export default function TransitionText({ children }: TransitionTextProps) {
  return <div className="text-center py-6 max-w-[623px] mx-auto">{children}</div>
}