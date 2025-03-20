import { useDisclosure } from '@mantine/hooks'
import { AppShell, Paper } from '@mantine/core'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import RouterSwitcher from './components/RouterSwitcher'

function App() {
  const [opened, {toggle}] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <Header toggle={toggle} opened={opened}/>
      <Navbar />
      <AppShell.Main>
        <RouterSwitcher />
      </AppShell.Main>
      <AppShell.Footer>
        <Paper p="md" style={{ textAlign: "center" }}>
          © 2021 Mantine
        </Paper>
      </AppShell.Footer>

    </AppShell>
  )
}

export default App
