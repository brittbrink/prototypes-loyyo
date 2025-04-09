import { Text, Avatar, Stack, Wrap, WrapItem, Fade, Collapse } from "@chakra-ui/react";
import { useVisibility } from "../context/GenericVisibilityContext";

export default function TierLevels() {
    const { visibility } = useVisibility();

    return (
        <>
            <Collapse in={visibility.tierLevel} animateOpacity unmountOnExit>
                <Fade in={visibility.tierLevel}>
                    <Text fontSize="lg" fontWeight="bold" color="gray.500" mb="2">
                        Tier Levels
                    </Text>

                    <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                        <Wrap spacing={4} >
                            <WrapItem>
                                <Avatar name="bronze" color="white" bg="yellow.600" />
                                <Text ml={2}>Bronze</Text>
                            </WrapItem>
                            <WrapItem>
                                <Avatar name="silver" color="white" bg="gray.400" />
                                <Text ml={2}>Silver</Text>
                            </WrapItem>
                            <WrapItem>
                                <Avatar name="gold" color="white" bg="yellow.300" />
                                <Text ml={2}>Gold</Text>
                            </WrapItem>
                            <WrapItem>
                                <Avatar name="emerald" color="white" bg="green.500" />
                                <Text ml={2}>Emerald</Text>
                            </WrapItem>
                            <WrapItem>
                                <Avatar name="diamond" color="white" bg="blue.300" />
                                <Text ml={2}>Diamond</Text>
                            </WrapItem>
                        </Wrap>
                    </Stack>
                </Fade>
            </Collapse>
        </>
    );
}
