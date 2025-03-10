import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { blue, green, pink, yellow } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";

export default function NoteCard({ note, handleDelete }) {
    const theme = useTheme(); // Get current theme

    return (
        <Card elevation={3} sx={{ 
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ backgroundColor: getCategoryColor(note.category) }}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
            />
            <CardContent>
                <Typography variant="body2">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    )
}

const getCategoryColor = (category) => {
    const colors = {
        work: yellow[700],
        money: green[500],
        todos: pink[500],
        default: blue[500]
    };
    return colors[category] || colors.default;
};
