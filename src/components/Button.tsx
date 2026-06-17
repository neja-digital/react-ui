import type { TNJButtonProps } from '@/types/props'
import classnames from 'classnames'
import type React from 'react'

const DEFAULT_CLASS_NAME = 'nj-button'

export default function NJButton(props: TNJButtonProps) {
	const { children, className, njSize, njTextSize, njVariant, njRounded, njBorder, njColor, ...rest } = props

	const sizeClass: string = njSize ? `size-${njSize}` : ''
	const textSizeClass: string = njTextSize ? `text-${njTextSize}` : ''
	const variantClass: string = njVariant ? `variant-${njVariant}` : ''
	const roundedClass: string = njRounded && njRounded !== 'none' ? `rounded-${njRounded}` : ''
	const borderClass: string = njBorder && njBorder !== 'none' ? `border-${njBorder}` : ''

	const classList = classnames(
		DEFAULT_CLASS_NAME,
		className,
		sizeClass,
		textSizeClass,
		variantClass,
		roundedClass,
		borderClass,
	)

	const buttonStyle: Record<string, string> = {
		'--button-color': njColor ? `var(--${njColor})` : 'transparent',
	}

	return (
		<button className={classList} style={buttonStyle as React.CSSProperties} {...rest}>
			{children}
		</button>)
}