import React from 'react'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { KeyboardArrowRight } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { useHistory } from 'react-router-dom';

const classes = {
  field: {
    marginTop: 3,
    marginBottom: 3,
    display: 'block'
  }
}

export default function Create() {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(!title)
    setDetailsError(!details)

    if (title === '') {
      setTitleError(true)
    }

    if (details === '') {
      setDetailsError(true)
    }

    if (title && details && category) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/'))
    }
  }

  return (
    <Container>
      <Typography 
        variant="h6" 
        component="h2" 
        gutterBottom 
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
          onChange={(e) => setTitle(e.target.value)}
          sx={classes.field}
          label="Note Title" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          error={titleError}
        />
        <TextField 
          onChange={(e) => setDetails(e.target.value)}
          sx={classes.field}
          label="Details" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          multiline
          minRows={4}
          error={detailsError}
        />

        <FormControl sx={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio color="secondary" />} label="Money" />
            <FormControlLabel value="todos" control={<Radio color="secondary" />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio color="secondary" />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio color="secondary" />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button 
          type="submit" 
          color="secondary" 
          variant='contained'
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>

      </form>

      

      {/* Icons */}
      {/* <br/>
      <AcUnitOutlined />
      <AcUnitOutlined color="secondary" fontSize="large" />
      <AcUnitOutlined color="action" fontSize="small" />
      <AcUnitOutlined color="error" fontSize="small" />
      <AcUnitOutlined color="disabled" fontSize="small" /> */}

    </Container>
  )
}
