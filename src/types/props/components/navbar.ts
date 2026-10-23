import type { INJProps } from '../shared'

export interface INJNavbarProps extends Omit<INJProps, 'njVariant'> {
  children: React.ReactNode
}

export type TNJNavbarProps = INJNavbarProps
