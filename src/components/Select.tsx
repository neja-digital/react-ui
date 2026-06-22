import type { TNJSelectProps } from '@/types/props/components/select'
import classnames from 'classnames'

const DEFAULT_CLASS_NAME = 'nj-select'

export default function NJSelect(props: TNJSelectProps) {
  const { children, className, njSize, njTextSize, njVariant, njRounded, njBorder, njColor, ...rest } = props

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

  const selectStyle: Record<string, string> = {
    '--select-color': njColor ? `var(--${njColor})` : 'transparent',
  }

  return (
    <select className={classList} style={selectStyle as React.CSSProperties} {...rest}>
      {children}
    </select>
  )
}
