import { Box, FormControl, FormHelperText, FormLabel, Input, Textarea, Button, Checkbox } from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";
import { useThemeContext } from '../layouts/ThemeContext'

export default function Create() {
  const { colorScheme } = useThemeContext()
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task name:</FormLabel>
          <Input type="text" name="title"/>
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Task description:</FormLabel>
          <Textarea placeholder="Enter a detailed description for the task..." name="description" />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg" colorScheme="purple"/>
          <FormLabel mb="0" ml="10px">Make this a priority task.</FormLabel>
        </FormControl>

        <Button colorScheme={colorScheme} type="submit">Submit</Button>
      </Form>
    </Box>
  )
}

export const createAction = async ({request}) => {
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
  }

  console.log(task)

  return redirect('/')
}
