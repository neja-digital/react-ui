import type { ButtonHTMLAttributes } from 'react'

/* ------ Basic / Multipurpose props ------ */

export type TNJSizeProp = 'tight' | 'compact' | 'regular' | 'large' | 'xlarge'
export type TNJTextSizeProp = 'tiny' | 'small' | 'regular' | 'large' | 'xlarge'
export type TNJVariantProp = 'light' | 'solid'
export type TNJRaisedProp = 'lightly' | 'medium' | 'highly'
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

export interface INJImageProp {
	srcSet?: string
	sizes?: string
	src: string
	alt: string
}

/* ------ Button props ------ */
export interface INJButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, INJBasicProps {
	children: React.ReactNode,
	njColor?: string
}

/* ------ Hero section props ------ */

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

/* ------ About section props ------ */

export type TNJAboutImagePositionProp = 'left' | 'right'

export interface INJAboutProps {
	children?: React.ReactNode
	njImgData?: INJImageProp
	njImgPos?: TNJAboutImagePositionProp
	njAboutTitle?: string
	njAboutContent?: React.ReactNode
}

/* ------ Card props ------ */

export interface INJCardProps extends INJBasicProps {
	children?: React.ReactNode
	njImgData?: INJImageProp
	njTitle?: string
	njText?: string
	njCtaButtons?: React.ReactNode
	njColor?: string
	njRaised?: TNJRaisedProp
}
