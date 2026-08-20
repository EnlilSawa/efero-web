import * as React from 'react'

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', children, ...props }, ref) => (
    <select
      ref={ref}
      className={`flex h-12 w-full appearance-none rounded-[10px] border border-[#b9c9c1] bg-white px-4 pr-10 text-[15px] text-ink shadow-sm outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/15 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </select>
  ),
)

Select.displayName = 'Select'
