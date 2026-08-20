import * as React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`flex h-12 w-full rounded-[10px] border border-[#b9c9c1] bg-white px-4 text-[15px] text-ink shadow-sm outline-none transition placeholder:text-[#73877f] focus:border-forest focus:ring-2 focus:ring-forest/15 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  ),
)

Input.displayName = 'Input'
