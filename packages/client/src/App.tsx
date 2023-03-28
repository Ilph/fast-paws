import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useChangeTheme } from './hooks/useChangeTheme'
import { useFetchServerData } from './hooks/useFetchServerData'
import { GlobalStyles } from './assets/styles/globalStyle'
import { BrowserRouter } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import RegistrationPage from './pages/RegistrationPage'

function App() {
  useFetchServerData()
  const { theme, themeToggler } = useChangeTheme()

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <button onClick={themeToggler}>Toggle Theme</button>
        {/*<Router/>*/}
        <RegistrationPage />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
