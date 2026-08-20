import * as React from 'react'

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = '', ...props }, ref) => (
    <label ref={ref} className={`text-[13px] font-medium text-ink ${className}`} {...props} />
  ),
)

Label.displayName = 'Label'
