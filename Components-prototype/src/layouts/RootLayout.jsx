import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Box, Grid, GridItem, Flex, Button, CloseButton, Text } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstallBanner, setShowInstallBanner] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault()
      setDeferredPrompt(event)
      setShowInstallBanner(true)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }
  , [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const {outcome} = await deferredPrompt.userChoice
    console.log(`User response to the A2HS prompt: ${outcome}`)
    setDeferredPrompt(null)
    setShowInstallBanner(false)
  }

  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50" minH="100vh">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="blue.500"
        minH={{lg: "100vh"}}
        //p={{ base: "10px", lg: "30px" }}
      >
        <Sidebar />
      </GridItem>

      <GridItem 
        as="main" 
        colSpan={{ base: 6, lg: 4, xl: 5 }} 
        p="20px"
        minH="100vh"
        display="flex"
        flexDirection="column"
      >
        <Navbar />

         {/* Install Banner */}
         {showInstallBanner && (
          <Flex
            bg="blue.100"
            border="1px solid"
            borderColor="blue.300"
            borderRadius="md"
            p="4"
            mb="4"
            align="center"
            justify="space-between"
          >
            <Text>
              Install this app on your home screen for a better experience.
            </Text>
            <Flex gap="2">
              <Button size="sm" colorScheme="blue" onClick={handleInstallClick}>
                Add to Home Screen
              </Button>
              <CloseButton onClick={() => setShowInstallBanner(false)} />
            </Flex>
          </Flex>
        )}

        <Box flex="1">
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  )
}
