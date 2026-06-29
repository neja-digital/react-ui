import type { TNJInputProps } from '@/types/props/components/input'
import classnames from 'classnames'
import type React from 'react'

const DEFAULT_CLASS_NAME = 'nj-input'

export default function NJInput(props: TNJInputProps) {
  const { className, id, njSize, njTextSize, njVariant, njRounded, njBorder, njColor, njLabel, ...rest } = props

  const sizeClass: string = njSize ? `size-${njSize}` : ''
  const textSizeClass: string = njTextSize ? `text-${njTextSize}` : ''
  const variantClass: string = njVariant ? `variant-${njVariant}` : ''
  const roundedClass: string = njRounded && njRounded !== 'none' ? `rounded-${njRounded}` : ''
  const borderClass: string = njBorder && njBorder !== 'none' ? `border-${njBorder}` : ''

  const classList = classnames(
    DEFAULT_CLASS_NAME,
    className,
    sizeClass,
    textSizeClass,
    variantClass,
    roundedClass,
    borderClass,
  )

  const inputStyle: Record<string, string> = {
    '--input-color': njColor ? `var(--${njColor})` : 'transparent',
  }

  return (
    <div className="nj-input-wrapper">
      {
        njLabel &&
        <label className={`${id}-label`} htmlFor={id}>{njLabel}</label>
      }
      <input
        id={id}
        className={classList}
        style={inputStyle as React.CSSProperties}
        {...rest} />
    </div>
  )
}