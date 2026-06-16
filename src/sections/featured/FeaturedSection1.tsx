import { NJCard } from '@/components'
import type { INJFeaturedProps } from '@/types'

export default function NJFeaturedSection1({ children, njTitle, njFeaturedItems, njCtaButtons }: INJFeaturedProps) {
	const featuredCardsJsx = njFeaturedItems ? njFeaturedItems.map(item => (
		<NJCard
			key={item.njTitle}
			{ ...item }
		/>
	)) : []

	return (
		<section className="nj-featured">
			{ children && <>{children}</>}
			{ !children &&
      <>
      	<h2 className="nj-featured__title">
      		{ njTitle }
      	</h2>
      	<div className="nj-featured__items">
      		{ featuredCardsJsx }
      	</div>
      	<div className="nj-featured__cta-buttons">
      		{ njCtaButtons }
      	</div>
      </>
			}
		</section>
	)
}
