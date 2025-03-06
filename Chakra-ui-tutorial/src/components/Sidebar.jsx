import { Flex, List, ListIcon, ListItem, Radio, RadioGroup, Spacer, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAlternateEmail, MdDashboard, MdEdit } from 'react-icons/md'

export default function Sidebar() {
    return (
        <Flex
            as="nav"
            p="10px"
            bg="purple.400"
            color="white"
        >
            <Stack
                direction={{ base: "row", lg: "column" }}
                spacing={4}
                align="center"
                w="full"
                flex="1"
            >
                <List display="flex" flexDirection={{ base: "row", lg: "column" }} gap={4} fontSize="1.2em">
                    <ListItem>
                        <NavLink to="/">
                            <ListIcon as={MdDashboard} color="white" />
                            Dashboard
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/create">
                            <ListIcon as={MdEdit} color="white" />
                            New Task
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/profile">
                            <ListIcon as={MdAlternateEmail} color="white" />
                            Profile
                        </NavLink>
                    </ListItem>
                </List>
                <Spacer />

                <Text color="white" fontSize="1.2em" spacing={4} fontWeight={{base: "normal", lg: "bold"}}>
                    Theme
                </Text>
                <RadioGroup defaultValue="light" colorScheme="whiteAlpha">
                    <Stack direction="row">
                        <Radio value="light">Light</Radio>
                        <Radio value="dark">Dark</Radio>
                    </Stack>
                </RadioGroup>
            </Stack>
        </Flex>
    )
}
