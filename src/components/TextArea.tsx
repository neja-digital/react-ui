import type { INJBasicProps, TNJResizeProp } from '../types/props'
import classnames from 'classnames'
import type { TextareaHTMLAttributes } from 'react'

export interface INJTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, INJBasicProps {
	njResize?: TNJResizeProp
	njColor?: string
}

export default function NJTextArea({
	className, njSize, njTextSize, njVariant, njRounded, njBorder, njColor, njResize, ...rest
}: INJTextAreaProps) {
	const sizeClass: string = njSize ? `size-${njSize}` : ''
	const textSizeClass: string = njTextSize ? `text-${njTextSize}` : ''
	const variantClass: string = njVariant ? `variant-${njVariant}` : ''
	const roundedClass: string = njRounded && njRounded !== 'none' ? `rounded-${njRounded}` : ''
	const borderClass: string = njBorder && njBorder !== 'none' ? `border-${njBorder}` : ''
	const resizeClass: string = njResize && njResize !== 'both' ? `resize-${njResize}` : ''

	const classList = classnames(
		'nj-textarea',
		className,
		sizeClass,
		textSizeClass,
		variantClass,
		roundedClass,
		borderClass,
		resizeClass,
	)

	const textAreaStyle: Record<string, string> = {
		'--textarea-color': njColor ? `var(--${njColor})` : 'transparent',
	}

	return (
		<textarea className={classList} style={textAreaStyle as React.CSSProperties} {...rest} />
	)
}
