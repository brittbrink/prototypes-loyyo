import { Flex, Burger, Button, useMantineColorScheme, useComputedColorScheme, AppShell } from "@mantine/core";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = ({toggle, opened}: any) => {
    const colorScheme = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme("light");

    const toggleColorScheme = () => {
        computedColorScheme === "light" ? colorScheme.setColorScheme("dark") : colorScheme.setColorScheme("light");
    }

    return (
        <AppShell.Header>
            <Flex justify="space-between" align="center" style={{ padding: "10px 20px" }}>
                <Burger onClick={toggle} opened={opened} hiddenFrom='sm' size='sm' />
                <div>Mantine tutorials</div>
                <Button
                    size="sm"
                    variant="link"
                    onClick={toggleColorScheme}
                >
                    {computedColorScheme === "light" ? <FaMoon /> : <FaSun />}
                </Button>
            </Flex>
        </AppShell.Header>
    )
}

export default Header;