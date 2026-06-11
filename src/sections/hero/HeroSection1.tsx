import { NJButton } from '@/components'
import type { INJHeroProps } from '@/types/props'
import classnames from 'classnames'

export default function NJHeroSection1({
	children,
	njBackground,
	njContentPos,
	njOverlay,
	njBlur,
	njHeadline,
	njSubheadline,
	njSupporting,
	njCtaPrimary,
	njCtaSecondary,
}: INJHeroProps) {
	const backgrounds: Record<string, string> = {}

	if (njBackground) {
		Object.keys(njBackground).forEach((k: string) => {
			backgrounds[`--${k}`] = `url(${njBackground[k as keyof typeof njBackground]})`
		})
	}

	const styleObj = {
		...backgrounds,
		'--overlay-opacity': `${Math.abs(njOverlay || 0)}`,
		'--content-blur': `blur(${njBlur || 0}px)`,
	}

	const positionClass = njContentPos ? `position-${njContentPos}` : 'position-center'
	const overlayClass = !njOverlay ? '' : njOverlay > 0 ? 'overlay-light' : 'overlay-dark'

	const classname = classnames('hero', positionClass)
	const classnameOverlay = classnames('hero__overlay', overlayClass)

	const headlineJsx = () => (
		<h2 className="hero__headline">
			{ njHeadline }
		</h2>
	)

	const subheadlineJsx = () => (
		<h3 className="hero__subheadline">
			{ njSubheadline }
		</h3>
	)

	const ctaSecondaryJsx = () => (
		<NJButton njColor="secondary" njVariant="solid">
			{ njCtaSecondary }
		</NJButton>
	)

	const ctaPrimaryJsx = () => (
		<NJButton njColor="primary" njVariant="solid">
			{ njCtaPrimary }
		</NJButton>
	)

	const supportingJsx = () => (
		<p className="hero__supporting">
			{ njSupporting }
		</p>
	)

	return (
		<section className={classname} style={styleObj as React.CSSProperties}>
			{
				njOverlay &&
        <div className={classnameOverlay}></div> }
			{
				children &&
        <div className="hero__content">
        	{children}
        </div>
			}
			{
				!children &&
				<div className="hero__content">
					{ njHeadline && headlineJsx() }
					{ njSubheadline && subheadlineJsx() }
					{
						(njCtaPrimary || njCtaSecondary) &&
					<div className="hero__cta-buttons">
						{ njCtaSecondary && ctaSecondaryJsx() }
						{ njCtaPrimary && ctaPrimaryJsx() }
					</div>
					}
					{ njSupporting && supportingJsx() }
				</div>
			}
		</section>
	)
}
