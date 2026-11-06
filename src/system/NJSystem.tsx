import '@neja-digital/css/index.css';
import NJThemeProvider from '../ThemeProvider';
import type { TNJTheme } from '../types/theme';

export interface INJSystemProps {
  children: React.ReactNode
  // Colour overrides, applied on top of the active css theme as inline variables
  theme?: TNJTheme
  // Named css theme (`data-theme`): 'light', 'dark', 'auto' (follows the OS) or any theme defined in css
  themeName?: string
}

export default function NJSystem({ children, theme, themeName }: INJSystemProps) {
  return (
    <NJThemeProvider theme={theme} themeName={themeName}>
      {children}
    </NJThemeProvider>
  );
}
