import type { TNJInputProps } from '@/types/props/components/input'
import classnames from 'classnames'
import { useId } from 'react'
import { getColorStyle, getModifierClasses } from '../utils'

const DEFAULT_CLASS_NAME = 'nj-input'

export default function NJInput(props: TNJInputProps) {
  const { className, id, style, njSize, njTextSize, njVariant, njRounded, njBorder, njColor, njLabel, ...rest } = props

  const generatedId = useId()
  const inputId = id ?? generatedId

  const classList = classnames(
    DEFAULT_CLASS_NAME,
    className,
    getModifierClasses({ njSize, njTextSize, njVariant, njRounded, njBorder }),
  )

  return (
    <div className="nj-input-wrapper">
      {
        njLabel &&
        <label className={`${inputId}-label`} htmlFor={inputId}>{njLabel}</label>
      }
      <input
        id={inputId}
        className={classList}
        style={getColorStyle('--input-color', njColor, style)}
        {...rest} />
    </div>
  )
}
