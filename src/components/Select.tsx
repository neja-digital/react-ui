import type { TNJSelectProps } from '@/types/props/components/select'
import classnames from 'classnames'
import { getColorStyle, getModifierClasses } from '../utils'

const DEFAULT_CLASS_NAME = 'nj-select'

export default function NJSelect(props: TNJSelectProps) {
  const { children, className, style, njSize, njTextSize, njVariant, njRounded, njBorder, njColor, ...rest } = props

  const classList = classnames(
    DEFAULT_CLASS_NAME,
    className,
    getModifierClasses({ njSize, njTextSize, njVariant, njRounded, njBorder }),
  )

  return (
    <select className={classList} style={getColorStyle('--select-color', njColor, style)} {...rest}>
      {children}
    </select>
  )
}
