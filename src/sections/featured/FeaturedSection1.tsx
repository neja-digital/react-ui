import { NJCard } from '@/components'
import type { TNJFeaturedProps } from '@/types'
import classnames from 'classnames'

const DEFAULT_CLASS_NAME = 'nj-featured'

export default function NJFeaturedSection1(props: TNJFeaturedProps) {
  if ('children' in props) {
    const className = classnames(DEFAULT_CLASS_NAME, props.className)

    return (
      <section className={className}>
        <>
          {props.children}
        </>
      </section>
    )
  }

  const { className, njTitle, njFeaturedItems, njCtaButtons } = props

  const featuredCardsJsx = njFeaturedItems ? njFeaturedItems.map(item => (
    <NJCard
      key={item.njTitle}
      { ...item }
    />
  )) : []

  const sectionClassname = classnames(DEFAULT_CLASS_NAME, className)

  return (
    <section className={sectionClassname}>
      <h2 className="nj-featured__title">
        { njTitle }
      </h2>
      <div className="nj-featured__items">
        { featuredCardsJsx }
      </div>
      <div className="nj-featured__cta-buttons">
        { njCtaButtons }
      </div>
    </section>
  )
}
