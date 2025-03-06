import { List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAlternateEmail, MdDashboard, MdEdit } from 'react-icons/md'

export default function Sidebar() {
    return (
        <List color="white" fontSize="1.2em" spacing={4}>
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
    )
}
