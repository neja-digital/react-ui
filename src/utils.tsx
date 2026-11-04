import type { INJProps, TNJRaisedProp } from './types/props/shared'

export const keyToCssVariable = (str: string) => {
  return `--${str}`
}

export const mapStringListToOptions = (list: string[]) => {
  return list.map(s => <option key={s} value={s}>{s}</option>)
}

type TNJModifierProps = Pick<INJProps, 'njSize' | 'njTextSize' | 'njVariant' | 'njRounded' | 'njBorder'> & {
  njRaised?: TNJRaisedProp
}

// Builds the shared modifier classes (size-*, text-*, variant-*, raised-*, rounded-*, border-*) for `classnames`
export const getModifierClasses = (props: TNJModifierProps): string[] => {
  const { njSize, njTextSize, njVariant, njRaised, njRounded, njBorder } = props

  return [
    njSize ? `size-${njSize}` : '',
    njTextSize ? `text-${njTextSize}` : '',
    njVariant ? `variant-${njVariant}` : '',
    njRaised ? `raised-${njRaised}` : '',
    njRounded && njRounded !== 'none' ? `rounded-${njRounded}` : '',
    njBorder && njBorder !== 'none' ? `border-${njBorder}` : '',
  ]
}

// Builds the style object holding the component's color variable. A caller's own `style` is merged in, so it adds to
// the variable instead of replacing it
export const getColorStyle = (variable: string, njColor?: string, style?: React.CSSProperties): React.CSSProperties => {
  return {
    [variable]: njColor ? `var(--${njColor})` : 'transparent',
    ...style,
  } as React.CSSProperties
}
