import type { INJBasicProps } from '../types/props'
import classnames from 'classnames'
import type { SelectHTMLAttributes } from 'react'

export interface INJSelectProps extends SelectHTMLAttributes<HTMLSelectElement>, INJBasicProps {
	njColor?: string
}

export default function NJSelect({
	children, className, njSize, njTextSize, njVariant, njRounded, njBorder, njColor, ...rest
}: INJSelectProps) {
	const sizeClass: string = njSize ? `size-${njSize}` : ''
	const textSizeClass: string = njTextSize ? `text-${njTextSize}` : ''
	const variantClass: string = njVariant ? `variant-${njVariant}` : ''
	const roundedClass: string = njRounded && njRounded !== 'none' ? `rounded-${njRounded}` : ''
	const borderClass: string = njBorder && njBorder !== 'none' ? `border-${njBorder}` : ''

	const classList = classnames(
		'nj-select',
		className,
		sizeClass,
		textSizeClass,
		variantClass,
		roundedClass,
		borderClass,
	)

	const selectStyle: Record<string, string> = {
		'--select-color': njColor ? `var(--${njColor})` : 'transparent',
	}

	return (
		<select className={classList} style={selectStyle as React.CSSProperties} {...rest}>
			{children}
		</select>
	)
}
