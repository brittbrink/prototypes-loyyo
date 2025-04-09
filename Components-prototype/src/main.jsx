import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from './layouts/ThemeContext'
import { VisibilityProvider } from './context/GenericVisibilityContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider>
        <VisibilityProvider>
          <App />
        </VisibilityProvider>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
