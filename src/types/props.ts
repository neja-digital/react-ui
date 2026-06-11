export type TNJSizeProp = 'tight' | 'compact' | 'regular' | 'large' | 'xlarge'
export type TNJTextSizeProp = 'tiny' | 'small' | 'regular' | 'large' | 'xlarge'
export type TNJVariantProp = 'light' | 'solid'
export type TNJRoundedProp = 'none' | 'tight' | 'medium' | 'large' | 'pill' | 'circle'
export type TNJBorderProp = 'none' | 'thin' | 'medium' | 'thick'
export type TNJResizeProp = 'none' | 'horizontal' | 'vertical' | 'both'

export interface INJBasicProps {
	className?: string
	njSize?: TNJSizeProp
	njTextSize?: TNJTextSizeProp
	njVariant?: TNJVariantProp
	njRounded?: TNJRoundedProp
	njBorder?: TNJBorderProp
}

export interface INJHeroBackground {
	mobileBg?: string,
	tabletBg?: string,
	tabletHBg?: string,
	desktopBg?: string,
}

export type TNJHeroContentProp = 'left' | 'center' | 'right'

export interface INJHeroProps {
	children?: React.ReactNode
	njBackground?: INJHeroBackground
	njContentPos?: TNJHeroContentProp
	njOverlay?: number
	njBlur?: number
	njHeadline?: string
	njSubheadline?: string
	njSupporting?: string
	njCtaButtons?: React.ReactNode
}
