export type TNJSizeProp = 'tight' | 'compact' | 'regular' | 'large' | 'xlarge';
export type TNJTextSizeProp = 'tiny' | 'small' | 'regular' | 'large' | 'xlarge';
export type TNJVariantProp = 'light' | 'solid';
export type TNJRaisedProp = 'lightly' | 'medium' | 'highly' | 'emphasized';
export type TNJRoundedProp = 'none' | 'tight' | 'medium' | 'large' | 'pill' | 'circle';
export type TNJBorderProp = 'none' | 'thin' | 'medium' | 'thick';
export type TNJResizeProp = 'none' | 'horizontal' | 'vertical' | 'both';

export interface INJProps {
  className?: string
  njSize?: TNJSizeProp
  njTextSize?: TNJTextSizeProp
  njVariant?: TNJVariantProp
  njRounded?: TNJRoundedProp
  njBorder?: TNJBorderProp
}

// Props of a component that can render as another element/component through `as`.
// The props of the rendered element (e.g. `to` for a router link) are inferred from `as`
export type TNJPolymorphicProps<T extends React.ElementType, TOwnProps = object> = TOwnProps & {
  as?: T
} & Omit<React.ComponentPropsWithRef<T>, keyof TOwnProps | 'as'>;

export interface INJImageProps {
  srcSet?: string
  sizes?: string
  src: string
  alt: string
}

export interface INJComponentSlot {
  className?: string
  children: React.ReactNode
}
