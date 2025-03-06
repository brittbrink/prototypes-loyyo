import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { blue, green, pink, yellow } from "@mui/material/colors";

const yllw = yellow[700]
const grn = green[500]
const bl = blue[500]
const pnk = pink[500]

const testClasses = (note) => {
    return {
        avatar: {
            backgroundColor: note.category === 'work' ? yllw : note.category === 'money' ? grn : note.category === 'todos' ? pnk : bl
        }
    }
}

export default function NoteCard({ note, handleDelete }) {
    const classes = testClasses(note)

    return (
        <div>
            <Card elevation={1} sx={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar sx={classes.avatar}>
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
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}