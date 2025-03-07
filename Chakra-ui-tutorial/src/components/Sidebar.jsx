import { Flex, List, ListIcon, ListItem, Radio, RadioGroup, Spacer, Stack, Text, Box } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAlternateEmail, MdDashboard, MdEdit } from 'react-icons/md'
import ThemeSwitcher from '../layouts/ThemeSwitcher'
import { useThemeContext } from '../layouts/ThemeContext'

export default function Sidebar() {
    const { primaryColor } = useThemeContext()

    return (
        <Flex
            as="nav"
            p="10px"
            bg={primaryColor}
            color="white"
            direction={{ base: "row", lg: "column" }}
            h={{ lg: "100vh" }}
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

                <Box>
                    <Text color="white" fontSize="1.2em" spacing={4} fontWeight={{ base: "normal", lg: "bold" }} >
                        Theme
                    </Text>
                    <Flex mt={{ md: "auto" }} mb={{ md: "10px" }}>
                        <ThemeSwitcher />
                    </Flex>
                    {/* <RadioGroup defaultValue="light" colorScheme="whiteAlpha">
                        <Stack direction="row">
                            <ThemeSwitcher />
                            {/* <Radio value="light">Light</Radio>
                            <Radio value="dark">Dark</Radio> 
                        </Stack>
                    </RadioGroup> */}
                </Box>
            </Stack>
        </Flex>
    )
}
