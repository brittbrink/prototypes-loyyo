import { Flex, IconButton } from '@chakra-ui/react'
import { CalendarIcon, EditIcon, AtSignIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import { useThemeContext } from '../layouts/ThemeContext'

export default function BottomNav() {
    const { primaryColor } = useThemeContext()

  return (
    <Flex
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bg={primaryColor}
      borderTop="1px solid #e2e8f0"
      justify="space-around"
      py={2}
      display={{ base: 'flex', lg: 'none' }}
      zIndex={1000}
    >
      <NavLink to="/">
        <IconButton icon={<CalendarIcon />} aria-label="Dashboard" variant="ghost" color={"white"} />
      </NavLink>
      <NavLink to="/create">
        <IconButton icon={<EditIcon />} aria-label="New Task" variant="ghost" color={"white"} />
      </NavLink>
      <NavLink to="/profile">
        <IconButton icon={<AtSignIcon />} aria-label="Profile" variant="ghost" color={"white"} />
      </NavLink>
    </Flex>
  )
}
