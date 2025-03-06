import { Box, Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center" mb="40px">
        <Heading as="h1">
            Dojo Tasks
        </Heading>
        <Spacer />

        <HStack spacing="20px">
            <Box bg="gray.200" p="10px">M</Box>
            <Text>mario@netninja.dev</Text>
            <Button colorScheme='purple'>Logout</Button>
        </HStack>
    </Flex>
  )
}
