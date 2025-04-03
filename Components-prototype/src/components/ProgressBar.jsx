import { Progress, Text } from "@chakra-ui/react";
import { useThemeContext } from "../layouts/ThemeContext";

export default function ProgressBarComponent () {
    const { colorScheme } = useThemeContext();
    return (
        <>
            <Text
                fontSize="lg"
                fontWeight="bold"
                color="gray.500"
                mb="2"
                mt="2"
            >
                Progress bar component
            </Text>
            <Progress value={80} colorScheme={colorScheme} />
        </>
        
    );

}
