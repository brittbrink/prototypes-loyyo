import { Table, TableCaption, TableContainer, Thead, Tr, Td, Th, Tbody, Text, HStack } from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"
import { useTableVisibility } from "../context/TableVisibilityContext"

export default function Dashboard() {
  const items = useLoaderData()
  const { showTable } = useTableVisibility()

  return (
    <>
      {showTable && (
        <TableContainer padding="1rem">
          <Table variant="striped" size="sm">
            <TableCaption placement="top">Table component</TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Author</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.title}</Td>
                  <Td>{item.description}</Td>
                  <Td>{item.author}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
  
}

export const tasksLoader = async () => {
  const res = await fetch('http://localhost:3000/tasks')
  return res.json()
}
