import type { INJComponentSlot, INJImageProps } from '../shared'

export type TNJImageSectionImagePositionProp = 'left' | 'right'

export interface INJImageSectionProps {
	className?: string
	njImgData: INJImageProps
	njImgPos: TNJImageSectionImagePositionProp
	njTitle: string
	njContent: React.ReactNode
}

export type TNJImageSectionProps = INJComponentSlot | INJImageSectionProps
