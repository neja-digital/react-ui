import '@neja-digital/css/index.css'
import NJThemeProvider from '../ThemeProvider'
import type { TNJTheme } from '../types/theme'

export interface INJSystemProps {
  children: React.ReactNode
  theme?: TNJTheme
}

export default function NJSystem({ children, theme }: INJSystemProps) {
  return (
    <NJThemeProvider theme={theme}>
      {children}
    </NJThemeProvider>
  )
}
