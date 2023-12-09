import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider ,extendTheme} from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/color-mode';
const theme = extendTheme({
  colors: {
    custom: '#383838', // Add the custom color
  },
  styles: {
    global: {
      body: {
        bg: 'black', // Set the default background color to black
        color: 'white', // Set the default text color to white
      },
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme = {theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
