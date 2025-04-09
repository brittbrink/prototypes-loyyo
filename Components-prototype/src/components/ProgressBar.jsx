import { Progress, Text, Collapse } from "@chakra-ui/react";
import { useThemeContext } from "../layouts/ThemeContext";
import { useVisibility } from "../context/GenericVisibilityContext";

export default function ProgressBarComponent() {
    const { colorScheme } = useThemeContext();
    const { visibility } = useVisibility();

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
                    40 points away from the next level
                </Text>
                <Progress value={65} colorScheme={colorScheme} />
            </Collapse>
        </>
    );

}
