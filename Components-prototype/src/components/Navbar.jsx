import { Avatar, AvatarBadge, Stack, Button, Flex, Heading, HStack, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { PhoneIcon } from '@chakra-ui/icons'
import { useThemeContext } from '../layouts/ThemeContext'

export default function Navbar() {
    const toast = useToast()
    const { primaryColor } = useThemeContext()
    const { colorScheme } = useThemeContext()

    const showToast = () => {
        toast({
            title: "Logged out",
            description: "You have been successfully logged out",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
            icon: <PhoneIcon />,
        })
    }

    return (
        <Flex 
            as="nav" 
            p="10px" 
            alignItems="center" 
            mb="5px" 
            h="60px"
            flexDirection={{ base: "row", md: "row" }} 
            justify={{ base: "center", md: "space-between" }} 
            textAlign={{ base: "center", md: "left" }}
            gap={{ base: 3, md: 0 }} 
        >
            <Heading as="h1" size="md">
                Dojo Tasks
            </Heading>

            <Stack 
                direction={{ base: "row", md: "row" }} 
                align="center" 
                spacing={4}
            >
                <HStack spacing="10px">
                    <Avatar name="mario" color="white" bg={primaryColor}>
                        <AvatarBadge boxSize="1em" bg="teal.500">
                            <Text fontSize="xs" color="white">3</Text>
                        </AvatarBadge>
                    </Avatar>
                    <Text fontSize={{ base: "sm", md: "md" }}>mario@netninja.dev</Text>
                </HStack>

                <Button colorScheme={colorScheme} size={{ base: "sm", md: "md" }} onClick={showToast}>
                    Logout
                </Button>
            </Stack>
        </Flex>
    );
}