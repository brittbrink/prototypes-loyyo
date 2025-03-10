import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Layout from './components/Layout';
import { useState, useMemo } from 'react';

function App() {
  const [mode, setMode] = useState('light')

  const theme = useMemo(() => createTheme({
    palette: {
      mode, // This will toggle between light and dark mode
      primary: {
        main: '#fefefe'
      },
      secondary: purple,
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',
        paper: mode === 'light' ? '#fff' : '#1e1e1e',
      },
      text: {
        primary: mode === 'light' ? '#333' : '#fefefe',
      }
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    }
  }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout mode={mode} setMode={setMode}>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
