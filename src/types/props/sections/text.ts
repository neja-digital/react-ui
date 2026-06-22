import type { INJComponentSlot } from '../shared'

export type TNJCtaButtonsPos = 'first' | 'second'

export interface INJTextSectionProps {
  className?: string
  njTitle: string
  njSubtitle?: string
  njContent: React.ReactNode
  njHighlights?: React.ReactNode
  njCtaButtons?: React.ReactNode
  njDirection?: string
  njCtaButtonsPos?: TNJCtaButtonsPos
}

export type TNJTextSectionProps = INJComponentSlot | INJTextSectionProps
