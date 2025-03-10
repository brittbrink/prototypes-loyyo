import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AddCircleOutlineOutlined, SubjectOutlined, DarkMode, LightMode } from "@mui/icons-material";
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Switch, IconButton } from "@mui/material";

const drawerWidth = 240;

export default function Layout({ children, mode, setMode }) {
    const history = useHistory()
    const location = useLocation()

    const toggleDarkMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        }
    ]

    return (
        <Box sx={{ display: 'flex' }}>
            {/* App Bar */}
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }}>
                        Today is {new Date().toDateString()}
                    </Typography>
                    <IconButton onClick={toggleDarkMode} color="inherit">
                        {mode === 'light' ? <DarkMode /> : <LightMode />}
                    </IconButton>
                    <Avatar src="/mario-av.png" sx={{ ml: 2 }} />
                </Toolbar>
            </AppBar>

            {/* Side Drawer */}
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    }
                }}
                variant="permanent"
                anchor="left"
            >
                <Typography variant="h5" sx={{ p: 2 }}>
                    Ninja Notes
                </Typography>

                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            sx={{ background: location.pathname === item.path ? '#ddd' : 'transparent' }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

                <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography>Dark Mode</Typography>
                    <Switch checked={mode === 'dark'} onChange={toggleDarkMode} color="secondary" />
                </Box>
            </Drawer>

            {/* Page Content */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box>
    )
}
