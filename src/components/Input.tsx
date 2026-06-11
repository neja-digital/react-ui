import type { INJBasicProps } from '../types/props'
import classnames from 'classnames'
import type { InputHTMLAttributes } from 'react'
import type React from 'react'

export interface INJInputProps extends InputHTMLAttributes<HTMLInputElement>, INJBasicProps {
	njColor?: string
}

export default function NJInput({
	className, njSize, njTextSize, njVariant, njRounded, njBorder, njColor, ...rest
}: INJInputProps) {
	const sizeClass: string = njSize ? `size-${njSize}` : ''
	const textSizeClass: string = njTextSize ? `text-${njTextSize}` : ''
	const variantClass: string = njVariant ? `variant-${njVariant}` : ''
	const roundedClass: string = njRounded && njRounded !== 'none' ? `rounded-${njRounded}` : ''
	const borderClass: string = njBorder && njBorder !== 'none' ? `border-${njBorder}` : ''

	const classList = classnames(
		'nj-input',
		className,
		sizeClass,
		textSizeClass,
		variantClass,
		roundedClass,
		borderClass,
	)

	const inputStyle: Record<string, string> = {
		'--input-color': njColor ? `var(--${njColor})` : 'transparent',
	}

	return (
		<input className={classList} style={inputStyle as React.CSSProperties} {...rest} />
	)
}