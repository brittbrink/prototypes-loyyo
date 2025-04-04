import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider } from '@chakra-ui/react'
import { TableVisibilityProvider } from './context/TableVisibilityContext'
import { ThemeProvider } from './layouts/ThemeContext'
import { TierLevelVisibilityProvider } from './context/TierLevelVisibilityContext'
import { ProgressBarVisibilityProvider } from './context/ProgressBarVisibilityContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider>
          <TableVisibilityProvider>
            <TierLevelVisibilityProvider>
            <ProgressBarVisibilityProvider>
              <App />
              </ProgressBarVisibilityProvider>
            </TierLevelVisibilityProvider>
          </TableVisibilityProvider>  
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
