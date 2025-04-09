import { Progress, Text, Collapse } from "@chakra-ui/react";
import { useThemeContext } from "../layouts/ThemeContext";
import { useVisibility } from "../context/GenericVisibilityContext";
import { useProgress } from "../context/ProgressTiersContext";

export default function ProgressBarComponent() {
    const { colorScheme } = useThemeContext();
    const { visibility } = useVisibility();
    const { progressPercent, nextTierPointsLeft, nextTier } = useProgress();

    return (
        <>
            <Collapse in={visibility.progressBar} animateOpacity unmountOnExit>
                <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color="gray.500"
                    mb="2"
                    mt="2"
                >
                    {nextTierPointsLeft > 0
                        ? `${nextTierPointsLeft} points away from ${nextTier.name}`
                        : "You've reached the highest level!"}
                </Text>
                <Progress
                    value={progressPercent}
                    size="xs"
                    width="100%"
                    borderRadius="full"
                    bg="gray.100"
                    colorScheme={colorScheme}
                />
            </Collapse>
        </>
    );

}
