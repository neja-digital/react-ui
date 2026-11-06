import type { TNJColor } from '../../theme';
import type { InputHTMLAttributes } from 'react';
import type { INJProps } from '../shared';

export interface INJInputProps extends InputHTMLAttributes<HTMLInputElement>, INJProps {
  njColor?: TNJColor
  njLabel?: string
  id?: string
}

export type TNJInputProps = INJInputProps;
