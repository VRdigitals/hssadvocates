import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type CommonProps = {
  children: ReactNode
  className?: string
}

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type AsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type PrimaryButtonProps = AsButton | AsAnchor

const base =
  'inline-flex items-center justify-center whitespace-nowrap rounded-none px-7 h-12 md:h-13 text-xs md:text-[13px] font-medium uppercase tracking-[0.14em] bg-gold text-ink transition-colors duration-200 hover:bg-gold-dark focus-visible:bg-gold-dark'

export function PrimaryButton({ children, className = '', ...props }: PrimaryButtonProps) {
  if ('href' in props && props.href !== undefined) {
    const { href, ...rest } = props as AsAnchor
    return (
      <a href={href} className={`${base} ${className}`} {...rest}>
        {children}
      </a>
    )
  }

  const rest = props as AsButton
  return (
    <button type="button" className={`${base} ${className}`} {...rest}>
      {children}
    </button>
  )
}
