import { Progress, Text } from "@chakra-ui/react";

export default function ProgressBarComponent () {
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
            <Progress value={80} />
        </>
        
    );

}
