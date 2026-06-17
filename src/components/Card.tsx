import type { TNJCardProps } from '@/types'
import classnames from 'classnames'

const DEFAULT_CLASS_NAME = 'nj-card'

export default function NJCard(props: TNJCardProps) {
	if ('children' in props) {
		const className = classnames(DEFAULT_CLASS_NAME, props.className)

		return (
			<article className={className}>
				{
					props.njImgData &&
          <div className="nj-card__image-wrapper">
          	<img className="nj-card__image" {...props.njImgData} />
          </div>
				}
				<div className="nj-card__content">
					{props.children}
				</div>
			</article>
		)
	}

	const {
		className,
		njImgData,
		njTitle,
		njText,
		njContent,
		njCtaButtons,
		njSize,
		njVariant,
		njRaised,
		njRounded,
		njBorder,
		njColor,
	} = props

	const sizeClass: string = njSize ? `size-${njSize}` : ''
	const variantClass: string = njVariant ? `variant-${njVariant}` : ''
	const raisedClass: string = njRaised ? `raised-${njRaised}` : ''
	const roundedClass: string = njRounded && njRounded !== 'none' ? `rounded-${njRounded}` : ''
	const borderClass: string = njBorder && njBorder !== 'none' ? `border-${njBorder}` : ''

	const classList = classnames(
		DEFAULT_CLASS_NAME,
		className,
		sizeClass,
		variantClass,
		raisedClass,
		roundedClass,
		borderClass,
	)

	const cardStyle: Record<string, string> = {
		'--card-color': njColor ? `var(--${njColor})` : 'transparent',
	}
  
	const titleJsx = () => (
		<h3 className="nj-card__title">
			{ njTitle }
		</h3>
	)

	const textJsx = () => (
		<p className="nj-card__text">
			{ njText }
		</p>
	)

	const ctaButtonsJsx = () => (
		<div className="nj-card__cta-buttons">
			{ njCtaButtons }
		</div>
	)

	return (
		<article className={classList} style={cardStyle as React.CSSProperties}>
			<div className="nj-card__image-wrapper">
				<img className="nj-card__image" {...njImgData} />
			</div>
			<div className="nj-card__content">
				{ njTitle && titleJsx() }
				{ njText && textJsx() }
				{ njContent && njContent }
				{ njCtaButtons && ctaButtonsJsx() }
			</div>
		</article>
	)
}
