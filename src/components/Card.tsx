import type { INJCardProps } from '@neja-digital/react-ui'
import classnames from 'classnames'

export default function NJCard({
	children,
	className,
	njImgData,
	njTitle,
	njText,
	njCtaButtons,
	njSize,
	njVariant,
	njRaised,
	njRounded,
	njBorder,
	njColor,
}: INJCardProps) {
	const sizeClass: string = njSize ? `size-${njSize}` : ''
	const variantClass: string = njVariant ? `variant-${njVariant}` : ''
	const raisedClass: string = njRaised ? `raised-${njRaised}` : ''
	const roundedClass: string = njRounded && njRounded !== 'none' ? `rounded-${njRounded}` : ''
	const borderClass: string = njBorder && njBorder !== 'none' ? `border-${njBorder}` : ''

	const classList = classnames(
		'nj-card',
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
			{
				children &&
        <div className="nj-card__content">
        	{children}
        </div>
			}
			{
				!children &&
        <div className="nj-card__content">
        	{ njTitle && titleJsx() }
        	{ njText && textJsx() }
        	{ njCtaButtons && ctaButtonsJsx() }
        </div>
			}
		</article>
	)
}
