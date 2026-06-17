import type { INJComponentSlot, INJImageProps } from '../shared'

export type TNJSplitSectionImagePositionProp = 'left' | 'right'

export interface INJSplitSectionProps {
	njPropsType: 'props'
	className?: string
	njImgData: INJImageProps
	njImgPos: TNJSplitSectionImagePositionProp
	njSectionTitle: string
	njSectionContent: React.ReactNode
}

export type TNJSplitSectionProps = INJComponentSlot | INJSplitSectionProps
