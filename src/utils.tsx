import type { INJProps, TNJRaisedProp } from './types/props/shared';

export const keyToCssVariable = (str: string) => {
  return `--${str}`;
};

export const mapStringListToOptions = (list: string[]) => {
  return list.map(s => <option key={s} value={s}>{s}</option>);
};

type TNJModifierProps = Pick<INJProps, 'njSize' | 'njTextSize' | 'njVariant' | 'njRounded' | 'njBorder'> & {
  njRaised?: TNJRaisedProp
};

// Builds the shared modifier classes (size-*, text-*, variant-*, raised-*, rounded-*, border-*) for `classnames`
export const getModifierClasses = (props: TNJModifierProps): string[] => {
  const { njSize, njTextSize, njVariant, njRaised, njRounded, njBorder } = props;

  return [
    njSize ? `size-${njSize}` : '',
    njTextSize ? `text-${njTextSize}` : '',
    njVariant ? `variant-${njVariant}` : '',
    njRaised ? `raised-${njRaised}` : '',
    njRounded && njRounded !== 'none' ? `rounded-${njRounded}` : '',
    njBorder && njBorder !== 'none' ? `border-${njBorder}` : '',
  ];
};

// Builds the style object holding the component's color variable. The variable is only set when a color is given, so
// the CSS default (e.g. --primary for controls, --surface for cards) stays in charge otherwise. With `onColor` the
// matching text-color variable is set too (`--button-color` -> `--button-on-color`) to the theme's `--on-<color>`;
// for a color without an `on-` partner it is undefined and the CSS falls back to `--on-primary`.
// A caller's own `style` is merged in, so it adds to the variables instead of replacing them
export const getColorStyle = (
  variable: string,
  njColor?: string,
  style?: React.CSSProperties,
  options: { onColor?: boolean } = {},
): React.CSSProperties => {
  const colorStyle: Record<string, string> = {};

  if (njColor) {
    colorStyle[variable] = `var(--${njColor})`;

    if (options.onColor) colorStyle[variable.replace(/-color$/, '-on-color')] = `var(--on-${njColor})`;
  }

  return { ...colorStyle, ...style } as React.CSSProperties;
};
