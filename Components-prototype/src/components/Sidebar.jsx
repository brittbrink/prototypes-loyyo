import { Flex, List, ListIcon, ListItem, Spacer, Stack, Text, Box, Switch, HStack, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { EditIcon, AtSignIcon, CalendarIcon } from '@chakra-ui/icons'
import ThemeSwitcher from '../layouts/ThemeSwitcher'
import { useThemeContext } from '../layouts/ThemeContext'
import { useVisibility } from '../context/GenericVisibilityContext'

export default function Sidebar() {
    const { visibility, toggleVisibility } = useVisibility()
    const { primaryColor } = useThemeContext()

    return (
        <Flex
            as="nav"
            p="10px"
            bg={primaryColor}
            color="white"
            direction={{ base: "row", md: "row", lg: "column" }}
            minH={{ base: "auto", md: "auto", lg: "100vh" }}
            w="full" // 👈 zorg dat hij altijd volledige breedte neemt
            wrap="wrap"
            justify="space-between" // 👈 of 'center' / 'space-evenly' / 'start' naar wens
            align="center"
        >

            <Stack
                direction={{ base: "row", md: "row", lg: "column" }}
                spacing={4}
                align="center"
                justify="center"
                wrap="wrap"
                w="full"
            >
                <List display="flex" flexDirection={{ base: "row", md: "row", lg: "column" }} gap={4} fontSize="1.2em">
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
                    <Text
                        color="white"
                        fontSize="1.2em"
                        fontWeight={{ base: "normal", lg: "bold" }}
                        mb={4}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        Components
                    </Text>

                    <SimpleGrid columns={2} spacing={4}>
                        <HStack spacing={4}>
                            <Text color="white">Table</Text>
                            <Switch
                                colorScheme="teal"
                                isChecked={visibility.table}
                                onChange={() => toggleVisibility("table")}
                            />
                        </HStack>

                        <HStack spacing={4}>
                            <Text color="white">Tier level</Text>
                            <Switch
                                colorScheme="teal"
                                isChecked={visibility.tierLevel}
                                onChange={() => toggleVisibility("tierLevel")}
                            />
                        </HStack>

                        <HStack spacing={4}>
                            <Text color="white">Progress bar</Text>
                            <Switch
                                colorScheme="teal"
                                isChecked={visibility.progressBar}
                                onChange={() => toggleVisibility("progressBar")}
                            />
                        </HStack>

                        <HStack spacing={4}>
                            <Text color="white">Stampcard</Text>
                            <Switch
                                colorScheme="teal"
                                isChecked={visibility.stampCard}
                                onChange={() => toggleVisibility("stampCard")}
                            />
                        </HStack>

                        <HStack spacing={4}>
                            <Text color="white">Points</Text>
                            <Switch
                                colorScheme="teal"
                                isChecked={visibility.points}
                                onChange={() => toggleVisibility("points")}
                            />
                        </HStack>

                        <HStack spacing={4}>
                            <Text color="white">Texts</Text>
                            <Switch
                                colorScheme="teal"
                                isChecked={visibility.texts}
                                onChange={() => toggleVisibility("texts")}
                            />
                        </HStack>

                        <HStack spacing={4}>
                            <Text color="white">Location</Text>
                            <Switch
                                colorScheme="teal"
                                isChecked={visibility.location}
                                onChange={() => toggleVisibility("location")}
                            />
                        </HStack>
                    </SimpleGrid>
                </Box>
                <Box>
                    <Text color="white" fontSize="1.2em" spacing={4} fontWeight={{ base: "normal", lg: "bold" }} >
                        Theme
                    </Text>
                    <Flex mt={{ md: "auto" }} mb={{ md: "10px" }}>
                        <ThemeSwitcher />
                    </Flex>
                </Box>
            </Stack>
        </Flex>
    )
}
