import type { TNJFullSectionProps } from '@/types/props'
import classnames from 'classnames'

const DEFAULT_CLASS_NAME = 'nj-full-section'

export default function NJFullSection(props: TNJFullSectionProps) {
  const { className, njBackground } = props

  const classList = classnames(DEFAULT_CLASS_NAME, className)

  const sectionStyle: Record< string, string> = {
    '--section-background-color': njBackground ? `var(--${njBackground})` : 'transparent',
  }

  return (
    <div className={classList} style={sectionStyle as React.CSSProperties}>
      {props.children}
    </div>
  )
}
