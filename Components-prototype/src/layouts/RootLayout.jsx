import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Box, Grid, GridItem } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {

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
        <Box flex="1">
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  )
}
