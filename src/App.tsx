import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyles'
import { theme } from './styles/theme'
import { MasteryLoadout } from './components/MasteryLoadout/MasteryLoadout'
import { GlobalContextProvider } from './contexts/GlobalContext'

export const App = () => (
  <GlobalContextProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MasteryLoadout />
    </ThemeProvider>
  </GlobalContextProvider>
)
