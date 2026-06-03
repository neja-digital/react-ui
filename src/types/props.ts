export type TNJSizeProp = 'tight' | 'compact' | 'regular' | 'large' | 'xlarge'
export type TNJTextSizeProp = 'tiny' | 'small' | 'regular' | 'large' | 'xlarge'
export type TNJVariantProp = 'light' | 'solid'
export type TNJRoundedProp = 'none' | 'tight' | 'medium' | 'large' | 'pill' | 'circle'
export type TNJBorderProp = 'none' | 'thin' | 'medium' | 'thick'
export type TNJResizeProp = 'none' | 'horizontal' | 'vertical' | 'both'

export interface INJBasicProps {
  className?: string
  njSize?: TNJSizeProp
  njTextSize?: TNJTextSizeProp
  njVariant?: TNJVariantProp
  njRounded?: TNJRoundedProp
  njBorder?: TNJBorderProp
}
