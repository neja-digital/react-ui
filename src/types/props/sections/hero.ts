import type { INJComponentSlot } from '../shared'

export interface INJHeroBackground {
  mobileBg?: string,
  tabletBg?: string,
  tabletHBg?: string,
  desktopBg?: string,
}

export type TNJHeroContentProp = 'left' | 'center' | 'right'

export interface INJHeroProps {
  className?: string
  njBackground: INJHeroBackground
  njContentPos?: TNJHeroContentProp
  njOverlay?: number
  njBlur?: number
  njHeadline: string
  njSubheadline?: string
  njSupporting?: string
  njCtaButtons: React.ReactNode
}

export type TNJHeroProps = INJComponentSlot | INJHeroProps
