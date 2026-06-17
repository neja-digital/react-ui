import type { ButtonHTMLAttributes } from 'react'
import type { INJProps } from '../shared'

export interface INJButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, INJProps {
	children: React.ReactNode
	njColor?: string
}

export type TNJButtonProps = INJButtonProps
