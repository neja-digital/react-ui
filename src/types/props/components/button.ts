import type { TNJColor } from '../../theme';
import type { ButtonHTMLAttributes } from 'react';
import type { INJProps } from '../shared';

export interface INJButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, INJProps {
  children: React.ReactNode
  njColor?: TNJColor
}

export type TNJButtonProps = INJButtonProps;
