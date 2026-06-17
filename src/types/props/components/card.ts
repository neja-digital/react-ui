import type { INJComponentSlot, INJImageProps, INJProps, TNJRaisedProp } from '../shared'

export interface INJCardProps extends INJProps {
	njImgData?: INJImageProps
	njTitle: string
	njText: string
	njCtaButtons?: React.ReactNode
	njColor?: string
	njRaised?: TNJRaisedProp
}

export interface INJCardComponentSlot extends INJComponentSlot {
	njImgData?: INJImageProps
}

export type TNJCardProps = INJCardComponentSlot | INJCardProps
