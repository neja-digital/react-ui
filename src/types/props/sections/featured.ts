import type { INJCardProps } from '../components/card'
import type { INJComponentSlot } from '../shared'

export interface INJFeaturedProps {
  className?: string
  njTitle: string
  njFeaturedItems: INJCardProps[]
  njCtaButtons?: React.ReactNode
}

export type TNJFeaturedProps = INJComponentSlot | INJFeaturedProps
