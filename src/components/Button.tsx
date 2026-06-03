import type { INJBasicProps } from '../types/props'
import classnames from 'classnames'
import type { ButtonHTMLAttributes } from 'react'
import type React from 'react'

export interface INJButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, INJBasicProps {
  children: React.ReactNode,
  njColor?: string
}

export default function NJButton({
  children, className, njSize, njTextSize, njVariant, njRounded, njBorder, njColor, ...rest
}: INJButtonProps) {
  const sizeClass: string = njSize ? `size-${njSize}` : ''
  const textSizeClass: string = njTextSize ? `text-${njTextSize}` : ''
  const variantClass: string = njVariant ? `variant-${njVariant}` : ''
  const roundedClass: string = njRounded && njRounded !== 'none' ? `rounded-${njRounded}` : ''
  const borderClass: string = njBorder && njBorder !== 'none' ? `border-${njBorder}` : ''

  const classList = classnames(
    'nj-button',
    className,
    sizeClass,
    textSizeClass,
    variantClass,
    roundedClass,
    borderClass,
  )

  const buttonStyle: Record<string, string> = {
    '--button-color': njColor ? `var(--${njColor})` : 'transparent',
  }

  return (
    <button className={classList} style={buttonStyle as React.CSSProperties} {...rest}>
      {children}
    </button>)
}