import { Flex, List, ListIcon, ListItem, Radio, RadioGroup, Spacer, Stack, Text, Box, Switch, HStack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { EditIcon, AtSignIcon, CalendarIcon } from '@chakra-ui/icons'
import { useTableVisibility } from '../context/TableVisibilityContext'

export default function Sidebar() {
    const { showTable, toggleTable } = useTableVisibility()
    return (
        <Flex
            as="nav"
            p="10px"
            bg="blue.500"
            color="white"
            direction={{ base: "row", lg: "column" }}
            minH={{ lg: "full" }}
            w="full"
            
        >
            <Stack
                direction={{ base: "row", lg: "column" }}
                spacing={4}
                align="center"
                w="full"
            >
                <List display="flex" flexDirection={{ base: "row", lg: "column" }} gap={4} fontSize="1.2em">
                    <ListItem>
                        <NavLink to="/">
                            <ListIcon as={CalendarIcon} color="white" />
                            Dashboard
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/create">
                            <ListIcon as={EditIcon} color="white" />
                            New Task
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/profile">
                            <ListIcon as={AtSignIcon} color="white" />
                            Profile
                        </NavLink>
                    </ListItem>
                </List>
                <Spacer />

                <Box>
                    <Text color="white" fontSize="1.2em" spacing={4} fontWeight={{ base: "normal", lg: "bold" }} >
                        Components
                    </Text>
                    <HStack spacing={4}>
                        <Text color="white">Table</Text>
                        <Switch colorScheme="teal" isChecked={showTable} onChange={toggleTable} />
                    </HStack>
                </Box>
            </Stack>
        </Flex>
    )
}
