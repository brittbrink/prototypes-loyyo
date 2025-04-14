import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Box, Grid, GridItem, Flex, Button, CloseButton, Text } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"
import BottomNav from "../components/BottomNav"
import { useThemeContext } from "./ThemeContext"

// Custom hook to check if screen size is mobile
function useIsMobile(threshold = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < threshold)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < threshold)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [threshold])

  return isMobile
}

export default function RootLayout() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstallBanner, setShowInstallBanner] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
  const { primaryColor } = useThemeContext()
  const isMobile = useIsMobile()  // Hook to check if it's mobile

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault()
      setDeferredPrompt(event)
      setShowInstallBanner(true)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    // Check PWA mode
    const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true
    setIsStandalone(standalone)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    console.log(`User response to the A2HS prompt: ${outcome}`)
    setDeferredPrompt(null)
    setShowInstallBanner(false)
  }

  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50" minH="100vh">
      {/* Sidebar */}
      <GridItem
        as="aside"
        colSpan={{ base: 6, md: 6, lg: 1 }}
        bg={primaryColor}
        minH={{ lg: "100vh" }}
        minW={{ base: "auto", md: "auto" }}
        display={{ base: "none", md: "block" }}  // Sidebar vanaf md (iPad)
      >
        <Sidebar />
      </GridItem>

      {/* Main Content */}
      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 5, xl: 5 }}
        p="10px"
        minH="100vh"
        display="flex"
        flexDirection="column"
        w="full"
      >
        <Navbar />

        {showInstallBanner && (
          <Flex bg="blue.100" border="1px solid" borderColor="blue.300" borderRadius="md" p="4" mb="4" align="center" justify="space-between">
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

        <Box flex="1" mb={{base: "55px"}}>
          <Outlet />
        </Box>
      </GridItem>

      {/* Bottom Navigation */}
      {(isStandalone || isMobile) && (
        <Box display={{ base: "block", md: "none" }}>
          <BottomNav />
        </Box>
      )}
    </Grid>
  )
}
