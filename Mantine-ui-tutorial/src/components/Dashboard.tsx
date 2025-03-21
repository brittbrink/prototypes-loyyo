import { Card, SimpleGrid, Text, Button, Avatar, Flex, Box, Group } from "@mantine/core";
import { FaEye, FaCommentDots } from "react-icons/fa";

const data = [
    {
        name: "Norway Adventures",
        description: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        avatar: "MK",
        author: "Mike Kennedy"
    },
    {
        name: "Norway Adventures",
        description: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        avatar: "MK",
        author: "Mike Kennedy"
    },
    {
        name: "Norway Adventures",
        description: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        avatar: "MK",
        author: "Mike Kennedy"
    },
    {
        name: "Norway Adventures",
        description: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        avatar: "MK",
        author: "Mike Kennedy"
    },
    {
        name: "Norway Adventures",
        description: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        avatar: "MK",
        author: "Mike Kennedy"
    },
    {
        name: "Norway Adventures",
        description: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        avatar: "MK",
        author: "Mike Kennedy"
    },
    {
        name: "Norway Adventures",
        description: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        avatar: "MK",
        author: "Mike Kennedy"
    },
    {
        name: "Norway Adventures",
        description: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        avatar: "MK",
        author: "Mike Kennedy"
    },
    {
        name: "Norway Adventures",
        description: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        avatar: "MK",
        author: "Mike Kennedy"
    },
    {
        name: "Norway Adventures",
        description: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        avatar: "MK",
        author: "Mike Kennedy"
    },
]

function Dashboard() {

    const cards = data.map((card) => {
        return (
            <Card withBorder key={card.name} shadow="xs" style={{ width: "100%" }}>
                <Card.Section>
                    <Flex gap={5} m="sm">
                        <Avatar color="cyan" radius="xl">{card.avatar}</Avatar>
                        <Box style={{ width: "100%" }}>
                            <Text fw={700} size="lg">
                                {card.name}
                            </Text>
                            <Text>{card.author}</Text>
                            </Box>
                    </Flex>
                </Card.Section>

                <Card.Section color="gray.500">
                    <Text>{card.description}</Text>
                </Card.Section>

                <Card.Section>
                    <Group justify="space-between" m="xs" mt="md" mb="xs">
                        <Button variant="default" leftSection={<FaEye />}>Watch</Button>
                        <Button variant="default" leftSection={<FaCommentDots />}>Comment</Button>
                    </Group>

                </Card.Section>
            </Card>
        )
    }
    )
    return (
        <SimpleGrid cols={{ base: 2, sm: 1, md: 2, lg: 3 }} spacing="xl">
            {cards}
        </SimpleGrid>
    );
}

export default Dashboard;