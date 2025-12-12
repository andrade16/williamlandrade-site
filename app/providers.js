'use client'

import { Global } from '@emotion/react'
import { ThemeProvider } from '@emotion/react'
import { globalStyles } from './styles/globalStyles'
import { theme } from './theme'

export function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  )
}
