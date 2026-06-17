import type { INJComponentSlot } from '../shared'

export interface INJTextSectionProps {
	className?: string
	njTitle: string
	njSubtitle?: string
	njContent: React.ReactNode
	njHighlights?: React.ReactNode
	njCtaButtons?: React.ReactNode
	njDirection?: string
}

export type TNJTextSectionProps = INJComponentSlot | INJTextSectionProps
