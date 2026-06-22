import type { TNJTextSectionProps } from '@/types/props/sections/text'
import classnames from 'classnames'

const DEFAULT_CLASS_NAME = 'nj-text-section'
const DEFAULT_WRAPPER_CLASS_NAME = 'nj-text-section__wrapper'

export default function NJTextSection1(props: TNJTextSectionProps) {
  if ('children' in props) {
    const className = classnames(DEFAULT_CLASS_NAME, props.className)

    return (
      <section className={className}>
        {props.children}
      </section>
    )
  }

  const { className, njTitle, njSubtitle, njContent, njHighlights, njCtaButtons, njDirection, njCtaButtonsPos } = props

  const directionClass: string = njDirection ? `direction-${njDirection}` : ''
  
  const sectionClassname = classnames(DEFAULT_CLASS_NAME, className)
  const sectionWrapperClassname = classnames(DEFAULT_WRAPPER_CLASS_NAME, directionClass)

  return (
    <section className={sectionClassname}>
      <h2 className={sectionWrapperClassname}>
        { njTitle }
      </h2>
      <div className="nj-text-section__wrapper">
        <div className="nj-text-section__first">
          {
            njSubtitle &&
          <h3 className="nj-text-section__subtitle">
            { njSubtitle }
          </h3>
          }
          <div className="nj-text-section__content">
            { njContent }
          </div>
          {
            njCtaButtons && njCtaButtonsPos === 'first' &&
          <div className="nj-text-section__cta-buttons">
            { njCtaButtons }
          </div>
          }
        </div>
        <div className="nj-text-section__second">
          {
            njHighlights &&
          <div className="nj-text-section__highlights">
            { njHighlights }
          </div>
          }
          {
            njCtaButtons && njCtaButtonsPos === 'second' &&
          <div className="nj-text-section__cta-buttons">
            { njCtaButtons }
          </div>
          }
        </div>
      </div>
    </section>
  )
}
