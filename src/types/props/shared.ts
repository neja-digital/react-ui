export type TNJSizeProp = 'tight' | 'compact' | 'regular' | 'large' | 'xlarge'
export type TNJTextSizeProp = 'tiny' | 'small' | 'regular' | 'large' | 'xlarge'
export type TNJVariantProp = 'light' | 'solid'
export type TNJRaisedProp = 'lightly' | 'medium' | 'highly' | 'emphasized'
export type TNJRoundedProp = 'none' | 'tight' | 'medium' | 'large' | 'pill' | 'circle'
export type TNJBorderProp = 'none' | 'thin' | 'medium' | 'thick'
export type TNJResizeProp = 'none' | 'horizontal' | 'vertical' | 'both'

export interface INJProps {
	njPropsType: 'props'
	className?: string
	njSize?: TNJSizeProp
	njTextSize?: TNJTextSizeProp
	njVariant?: TNJVariantProp
	njRounded?: TNJRoundedProp
	njBorder?: TNJBorderProp
}

export interface INJImageProps {
	srcSet?: string
	sizes?: string
	src: string
	alt: string
}

export interface INJComponentSlot {
	njPropsType: 'jsx'
	className?: string
	children: React.ReactNode
}
