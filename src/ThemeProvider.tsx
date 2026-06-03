import type { TNJTheme } from './types/theme'
import { keyToCssVariable } from './utils'

interface INJThemeProviderProps {
  children: React.ReactNode
  theme?: TNJTheme
}

export default function NJThemeProvider({ children, theme }: INJThemeProviderProps) {
  const rootStyles: Record<string, string> = {}

  if (theme && theme.colors) {
    Object.keys(theme.colors).forEach((key: string) => {
      rootStyles[keyToCssVariable(key)] = theme.colors[key]
    })
  }

  return (
    <div
      className="theme-provider style-wrapper"
      style={rootStyles as React.CSSProperties}
    >
      {children}
    </div>
  )
}