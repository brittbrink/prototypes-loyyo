import { Card, CardBody, Text, Image, Box, Collapse, Button } from "@chakra-ui/react"
import { useThemeContext } from "../layouts/ThemeContext"
import { useVisibility } from "../context/GenericVisibilityContext"
import { useProgress } from "../context/ProgressTiersContext"

export default function Points() {
    const { primaryColor } = useThemeContext()
    const { visibility } = useVisibility()
    const { points, setPoints } = useProgress()

    return (
        <Collapse in={visibility.points} animateOpacity unmountOnExit>
            <Box position="relative" width="100%" maxWidth="400px" margin="auto" mb="10" mt="8">
                <Card
                    borderRadius="20px"
                    width={{ base: "90%", md: "100%", lg: "100%", xl: "100%" }} // Adjust width based on screen size
                    height={{ base: "100%", md: "100%" }} // Adjust height for smaller screens
                    padding={{ base: "2", sm: "2", md: "4" }} // Adjust padding based on screen size
                    bgColor="orange.400"
                    transform="rotate(-6deg)"
                    position="absolute"
                    zIndex={0}
                    left={{ base: "17px", md: "-2px", lg:"1px"}} // Adjust left position for different screens
                    boxShadow="lg"
                />
                {/* <Image
                    src='https://i.ibb.co/B3gYTYs/Profile-Image.png'
                    border='3px solid white'
                    position="absolute"
                    bottom="-34px"
                    left="50%"
                    transform="translateX(-50%)"
                    width="68px"
                    height="68px"
                    borderRadius="50%"
                    zIndex={2}
                /> */}
                <Card
                    borderRadius="20px"
                    width={{ base: "90%", md: "100%", lg: "100%", xl: "100%" }} 
                    padding={{ base: "2", sm: "3", md: "4" }}
                    bgColor={primaryColor} 
                    zIndex={1}
                    margin="auto"
                >
                    <CardBody display="flex" flexDirection="column" alignItems="flex-start" p={4} pt={0}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" mb={2}>
                            <Text fontSize="xl" color="white">
                                Store
                            </Text>
                            <Image
                                src="/img/creditcard-chip.png"
                                alt="Credit Card Chip"
                                boxSize="40px"
                                objectFit="cover"
                                borderRadius="md"
                            />
                        </Box>
                        <Text fontSize="xl" fontWeight="bold" color="white" mb={1}>
                            {points} points
                        </Text>
                        <Text fontSize="md" color="white" mb={1}>
                            John Doe
                        </Text>
                        <Text fontSize="lg" color="white">
                            **** **** **** 1234
                        </Text>
                    </CardBody>
                </Card>


            </Box>
            <Box display="flex" justifyContent="space-between" gap={{base: 2}} width="100%">
                <Button onClick={() => setPoints(points + 500)}>Add 500 Points</Button>
                <Button onClick={() => setPoints(points + 100)}>Add 100 Points</Button>
                <Button onClick={() => setPoints(0)}>Clear Points</Button>
            </Box>
        </Collapse>
    )
}
