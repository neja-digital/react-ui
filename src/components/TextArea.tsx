import type { TNJTextAreaProps } from '@/types/props/components/textarea'
import classnames from 'classnames'
import { useId } from 'react'
import { getColorStyle, getModifierClasses } from '../utils'

const DEFAULT_CLASS_NAME = 'nj-textarea'

export default function NJTextArea(props: TNJTextAreaProps) {
  const {
    className,
    style,
    njSize,
    njTextSize,
    njVariant,
    njRounded,
    njBorder,
    njColor,
    njResize,
    njLabel,
    id,
    ...rest
  } = props

  const generatedId = useId()
  const textAreaId = id ?? generatedId

  const resizeClass: string = njResize && njResize !== 'both' ? `resize-${njResize}` : ''

  const classList = classnames(
    DEFAULT_CLASS_NAME,
    className,
    getModifierClasses({ njSize, njTextSize, njVariant, njRounded, njBorder }),
    resizeClass,
  )

  return (
    <div className="nj-textarea-wrapper">
      {
        njLabel &&
        <label className={`${textAreaId}-label`} htmlFor={textAreaId}>{njLabel}</label>
      }
      <textarea id={textAreaId}
        className={classList}
        style={getColorStyle('--textarea-color', njColor, style)}
        {...rest}
      />
    </div>
  )
}
