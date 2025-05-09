import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import { MdComment, MdVisibility } from "react-icons/md"
import { useLoaderData } from "react-router-dom"
import { useThemeContext } from '../layouts/ThemeContext'

export default function Dashboard() {
  const tasks = useLoaderData()
  const { primaryColor } = useThemeContext()

  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks && tasks.map(task => (
        <Card key={task.id} borderTop="8px" borderColor={primaryColor}  bg="white">
          <CardHeader>
            <Flex gap={5}>
              <Avatar src={task.img} />
              <Box>
                <Heading as="h3" size="sm">{task.title}</Heading>
                <Text>{task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody color="gray.500">
            <Text>{task.description}</Text>
          </CardBody>

          <Divider borderColor="gray.200" />

          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<MdVisibility/>}>Watch</Button>
              <Button variant="ghost" leftIcon={<MdComment />}>Comment</Button>
            </HStack>

          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
    
  )
}

export const tasksLoader = async () => {
  const res = await fetch('http://localhost:3000/tasks')
  return res.json()
}
