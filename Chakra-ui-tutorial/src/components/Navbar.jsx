import { Avatar, AvatarBadge, Box, Button, Flex, Heading, HStack, Spacer, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { MdLockOpen } from 'react-icons/md'

export default function Navbar() {
    const toast = useToast()

    const showToast = () => {
        toast({
            title: "Logged out",
            description: "You have been successfully logged out",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
            icon: <MdLockOpen />
        })
    }

    return (
        <Flex as="nav" p="10px" alignItems="center" mb="40px">
            <Heading as="h1">
                Dojo Tasks
            </Heading>
            <Spacer />

            <HStack spacing="20px">
                <Avatar name="mario" color="white" bg="purple.400" src="/img/mario.png">
                    <AvatarBadge w="1.3em" bg="teal.500">
                        <Text fontSize="xs" color="white">3</Text>
                    </AvatarBadge>
                </Avatar>
                <Text>mario@netninja.dev</Text>
                <Button colorScheme='purple' onClick={showToast}>Logout</Button>
            </HStack>
        </Flex>
    )
}
