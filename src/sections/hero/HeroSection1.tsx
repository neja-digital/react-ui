import type { TNJHeroProps } from '@/types/props'
import classnames from 'classnames'

const DEFAULT_CLASS_NAME = 'nj-hero'
const DEFAULT_OVERLAY_CLASS_NAME = 'nj-hero__overlay'

export default function NJHeroSection1(props: TNJHeroProps) {
  if ('children' in props) {
    const sectionClassname = classnames(DEFAULT_CLASS_NAME, props.className)

    return (
      <section className={sectionClassname}>
        <div className="nj-hero__content">
          {props.children}
        </div>
      </section>
    )
  }

  const {
    className, njBackgroundImages, njContentPos, njOverlay, njBlur, njHeadline, njSubheadline, njSupporting,
    njCtaButtons,
  } = props

  const backgrounds: Record<string, string> = {}

  if (njBackgroundImages) {
    Object.keys(njBackgroundImages).forEach((k: string) => {
      backgrounds[`--${k}`] = `url(${njBackgroundImages[k as keyof typeof njBackgroundImages]})`
    })
  }

  const styleObj = {
    ...backgrounds,
    '--overlay-opacity': `${Math.abs(njOverlay || 0)}`,
    '--content-blur': `blur(${njBlur || 0}px)`,
  }

  const positionClass = njContentPos ? `position-${njContentPos}` : 'position-center'
  const overlayClass = !njOverlay ? '' : njOverlay > 0 ? 'overlay-light' : 'overlay-dark'

  const sectionClassname = classnames(DEFAULT_CLASS_NAME, className, positionClass)
  const overlayClassname = classnames(DEFAULT_OVERLAY_CLASS_NAME, overlayClass)

  const headlineJsx = () => (
    <h2 className="nj-hero__headline">
      { njHeadline }
    </h2>
  )

  const subheadlineJsx = () => (
    <h3 className="nj-hero__subheadline">
      { njSubheadline }
    </h3>
  )

  const ctaButtonsJsx = () => (
    <div className="nj-hero__cta-buttons">
      { njCtaButtons }
    </div>
  )

  const supportingJsx = () => (
    <p className="nj-hero__supporting">
      { njSupporting }
    </p>
  )

  return (
    <section className={sectionClassname} style={styleObj as React.CSSProperties}>
      {
        njOverlay ?
          <div className={overlayClassname}></div> :
          null
      }

      <div className="nj-hero__content">
        { njHeadline && headlineJsx() }
        { njSubheadline && subheadlineJsx() }
        { njCtaButtons && ctaButtonsJsx() }
        { njSupporting && supportingJsx() }
      </div>
    </section>
  )
}
