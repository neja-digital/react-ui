import type { TNJSplitSectionProps } from '@/types'
import classnames from 'classnames'

const DEFAULT_CLASS_NAME = 'nj-split-section'

export default function NJSplitSection1(props: TNJSplitSectionProps) {
	if ('children' in props) {
		const className = classnames(DEFAULT_CLASS_NAME, props.className)

		return (
			<section className={className}>
				{props.children}
			</section>
		)
	}

	const { className, njImgData, njImgPos, njTitle, njContent } = props

	const imgPosClass = njImgPos ? `image-${njImgPos}` : ''
	const sectionClassname = classnames(DEFAULT_CLASS_NAME, className, imgPosClass)

	return (
		<section className={sectionClassname}>
			<div className="nj-split-section__text">
				<h2 className="nj-split-section__title">
					{ njTitle }
				</h2>
				<div className="nj-split-section__description">
					{ njContent }
				</div>
			</div>
			<div className="nj-split-section__image">
				<img { ...njImgData } />
			</div>
		</section>
	)
}
