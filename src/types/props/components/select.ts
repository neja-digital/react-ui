import type { TNJColor } from '../../theme';
import type { SelectHTMLAttributes } from 'react';
import type { INJProps } from '../shared';

export interface INJSelectProps extends SelectHTMLAttributes<HTMLSelectElement>, INJProps {
  children: React.ReactNode
  njColor?: TNJColor
}

export type TNJSelectProps = INJSelectProps;
