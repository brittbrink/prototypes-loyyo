import { Text, SimpleGrid, Collapse } from "@chakra-ui/react"
import { useVisibility } from "../context/GenericVisibilityContext"

export default function Texts() {
  const { visibility } = useVisibility()

  return (
    <Collapse in={visibility.texts} animateOpacity unmountOnExit>
      <Text
        fontSize="lg"
        fontWeight="bold"
        color="gray.500"
        mb="2"
        mt="2"
      >
        Texts
      </Text>

      <SimpleGrid columns={{ base: 2, md: 2 }}>
        <Text>
          This is a text component.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </SimpleGrid>
    </Collapse>
  )
}
