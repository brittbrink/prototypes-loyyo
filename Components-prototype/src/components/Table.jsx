import { Table, Text, TableContainer, Thead, Tr, Td, Th, Tbody } from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"
import { useTableVisibility } from "../context/TableVisibilityContext"

export default function TableComponent() {
    const items = useLoaderData()
    const { showTable } = useTableVisibility()

    return (
        <>
            {showTable && (
                <TableContainer mt="2">
                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color="gray.500"
                        mb="2"
                    >
                        Table
                    </Text>
                    <Table variant="striped" size="sm">
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
