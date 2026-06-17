import type { INJComponentSlot, INJImageProps } from '../shared'

export type TNJSplitSectionImagePositionProp = 'left' | 'right'

export interface INJSplitSectionProps {
	className?: string
	njImgData: INJImageProps
	njImgPos: TNJSplitSectionImagePositionProp
	njTitle: string
	njContent: React.ReactNode
}

export type TNJSplitSectionProps = INJComponentSlot | INJSplitSectionProps
