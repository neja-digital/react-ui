import type { TNJButtonProps } from '@/types/props'
import classnames from 'classnames'
import { getColorStyle, getModifierClasses } from '../utils'

const DEFAULT_CLASS_NAME = 'nj-button'

export default function NJButton(props: TNJButtonProps) {
  const { children, className, style, njSize, njTextSize, njVariant, njRounded, njBorder, njColor, ...rest } = props

  const classList = classnames(
    DEFAULT_CLASS_NAME,
    className,
    getModifierClasses({ njSize, njTextSize, njVariant, njRounded, njBorder }),
  )

  return (
    <button className={classList} style={getColorStyle('--button-color', njColor, style)} {...rest}>
      {children}
    </button>)
}
