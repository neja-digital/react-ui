import type { TNJColor } from '../../theme';
import type { TextareaHTMLAttributes } from 'react';
import type { INJProps, TNJResizeProp } from '../shared';

export interface INJTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, INJProps {
  njResize?: TNJResizeProp
  njColor?: TNJColor
  njLabel?: string
  id?: string
}

export type TNJTextAreaProps = INJTextAreaProps;
