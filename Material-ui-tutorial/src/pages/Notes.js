import React, { useEffect, useState } from 'react'
import { Box, Container } from '@mui/material'
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css'

export default function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map(note => (
          <Box key={note.id} size={{ xs: 12, md: 6, lg: 4 }}>
            <NoteCard note={note} handleDelete={handleDelete}/>
          </Box>
        ))}
      </Masonry>
    </Container>
  )
}
