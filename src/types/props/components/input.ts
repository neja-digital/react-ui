import type { InputHTMLAttributes } from 'react'
import type { INJProps } from '../shared'

export interface INJInputProps extends InputHTMLAttributes<HTMLInputElement>, INJProps {
  njColor?: string
}

export type TNJInputProps = INJInputProps
