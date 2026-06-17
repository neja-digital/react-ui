import type { INJComponentSlot } from '../shared'

export interface INJTextSectionProps {
	className?: string
	njTitle: string
	njSubtitle?: string
	njContent: string
	njHighlights?: string
	njCtaButtons?: React.ReactNode
	njDirection?: string
}

export type TNJTextSectionProps = INJComponentSlot | INJTextSectionProps
