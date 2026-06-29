import type { TextareaHTMLAttributes } from 'react'
import type { INJProps, TNJResizeProp } from '../shared'

export interface INJTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, INJProps {
  njResize?: TNJResizeProp
  njColor?: string
  njLabel?: string
  id?: string
}

export type TNJTextAreaProps = INJTextAreaProps
