import type { TNJTextAreaProps } from '@/types/props/components/textarea'
import classnames from 'classnames'

const DEFAULT_CLASS_NAME = 'nj-textarea'

export default function NJTextArea(props: TNJTextAreaProps) {
  const {
    className,
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

  const sizeClass: string = njSize ? `size-${njSize}` : ''
  const textSizeClass: string = njTextSize ? `text-${njTextSize}` : ''
  const variantClass: string = njVariant ? `variant-${njVariant}` : ''
  const roundedClass: string = njRounded && njRounded !== 'none' ? `rounded-${njRounded}` : ''
  const borderClass: string = njBorder && njBorder !== 'none' ? `border-${njBorder}` : ''
  const resizeClass: string = njResize && njResize !== 'both' ? `resize-${njResize}` : ''

  const classList = classnames(
    DEFAULT_CLASS_NAME,
    className,
    sizeClass,
    textSizeClass,
    variantClass,
    roundedClass,
    borderClass,
    resizeClass,
  )

  const textAreaStyle: Record<string, string> = {
    '--textarea-color': njColor ? `var(--${njColor})` : 'transparent',
  }

  return (
    <div className="nj-textarea-wrapper">
      {
        njLabel &&
        <label className={`${id}-label`} htmlFor={id}>{njLabel}</label>
      }
      <textarea id={id}
        className={classList}
        style={textAreaStyle as React.CSSProperties}
        {...rest}
      />
    </div>
  )
}
