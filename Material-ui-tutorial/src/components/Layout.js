import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@emotion/react";
import { format } from "date-fns";
import { Avatar } from "@mui/material";

const drawerWidth = 240;

const classes = {
    page: {
        backgroundColor: '#f9f9f9',
        width: '100%',
        padding: (theme) => theme.spacing(3)
    },
    drawer: {
        width: drawerWidth,
        "& .MuiDrawer-paper": {
            width: drawerWidth,
        }
    },
    root: {
        display: 'flex'
    },
    active: {
        background: '#f4f4f4'
    },
    title: {
        padding: (theme) => theme.spacing(2)
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: (theme) => {
        return {
            my: `${theme.mixins.toolbar.minHeight}px`
        }
    },
    date: {
        flexGrow: 1
    },
    avatar: {
        marginLeft: theme => theme.spacing(2)
    }
}

export default function Layout({ children }) {
    const history = useHistory()
    const location = useLocation()
    const theme = useTheme()

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
        <Box sx={classes.root}>
            {/* App bar */}
            <AppBar
                elevation={0}
                sx={classes.appbar}
            >
                <Toolbar>
                    <Typography sx={classes.date}>
                        Today is the {format(new Date(), 'do MMMM y')}
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar src="/mario-av.png" sx={classes.avatar} />
                </Toolbar>
            </AppBar>

            {/* Side drawer */}
            <Drawer
                sx={classes.drawer}
                variant="permanent"
                anchor="left"
            >
                <div>
                    <Typography variant="h5" sx={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>

                {/* List / Links */}
                <List sx={classes.date}>
                    {menuItems.map(item => (
                        <ListItem
                            button="true"
                            key={item.text}
                            onClick={() =>
                                history.push(item.path)
                            }
                            sx={
                                location.pathname === item.path
                                    ? classes.active
                                    : null
                            }
                        >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

                <Box sx={classes.title}>
                    <Avatar src="/mario-av.png" />
                    <Typography variant="caption" color="textSecondary">
                        Logged in as
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                </Box>
            </Drawer>

            <Box sx={classes.page}>
                <Box sx={classes.toolbar(theme)}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}