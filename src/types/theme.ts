// Fill colours of the theme. Each has an `on-*` partner: the text colour used on top of it
export type TNJThemeFill = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger';

export type TNJThemeSurface = 'background' | 'surface' | 'surface-raised';

// The colour tokens defined by @neja-digital/css (vars/colors.css). Custom keys are allowed on top of these
export type TNJThemeColorKey =
  | TNJThemeFill
  | `on-${TNJThemeFill}`
  | TNJThemeSurface
  | 'text'
  | 'text-muted'
  | 'border-color'
  | 'focus-ring'
  | 'shadow-rgb';

// A theme colour name for `njColor` / `njBackground`. The known names autocomplete; any custom theme key still works
export type TNJColor = TNJThemeFill | TNJThemeSurface | (string & Record<never, never>);

export type TNJTheme = {
  colors: Partial<Record<TNJThemeColorKey, string>> & Record<string, string>
};
