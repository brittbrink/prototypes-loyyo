import {
    Text, Avatar, Wrap, WrapItem, Fade, Collapse, Box,
} from "@chakra-ui/react";
import { useVisibility } from "../context/GenericVisibilityContext";
import { useProgress } from "../context/ProgressTiersContext";

export default function TierLevels() {
    const { visibility } = useVisibility();
    const { tiers, activeTierIndex } = useProgress();

    return (
        <Collapse in={visibility.tierLevel} animateOpacity unmountOnExit>
            <Fade in={visibility.tierLevel}>
                <Text fontSize="xl" fontWeight="semibold" color="gray.600" mb={4}>
                    Tier Levels
                </Text>
                <Box position='relative' mb={6}>
                    <Wrap spacing={4}>
                        {tiers.map((tier, index) => (
                            <WrapItem key={tier.name}>
                                <Box
                                    bg="white"
                                    borderRadius="lg"
                                    boxShadow={activeTierIndex === index ? "lg" : "sm"}
                                    padding={4}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    minW="100px"
                                    border={activeTierIndex === index ? "2px solid teal" : "none"}
                                >
                                    <Avatar name={tier.name} bg={tier.color} color="white" size="md" mb={2} />
                                    <Text fontSize="md" fontWeight="medium" color="gray.700">
                                        {tier.name}
                                    </Text>
                                    <Text fontSize="sm" color="gray.500">
                                        {tier.min}-{tier.max} points
                                    </Text>
                                </Box>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Box>
            </Fade>
        </Collapse>
    );
}
