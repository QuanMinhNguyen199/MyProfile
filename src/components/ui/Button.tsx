import type { AnchorHTMLAttributes, ReactNode } from 'react'
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; variant?: 'primary' | 'secondary' | 'ghost'; disabled?: boolean }
export function Button({ children, variant='primary', disabled, className='', ...props }: Props) {
  if (disabled) return <span className={`button ${variant} disabled ${className}`} aria-disabled="true">{children}</span>
  return <a className={`button ${variant} ${className}`} {...props}>{children}</a>
}
