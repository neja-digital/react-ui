import type { InputHTMLAttributes } from 'react'
import type { INJProps } from '../shared'

export interface INJInputProps extends InputHTMLAttributes<HTMLInputElement>, INJProps {
	njPropsType: 'props'
	njColor?: string
}

export type TNJInputProps = INJInputProps
