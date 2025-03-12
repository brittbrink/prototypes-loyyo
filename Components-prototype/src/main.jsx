import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider } from '@chakra-ui/react'
import { TableVisibilityProvider } from './context/TableVisibilityContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <TableVisibilityProvider>
        <App />
      </TableVisibilityProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
