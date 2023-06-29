import { useColorMode, HStack, Switch, Text } from "@chakra-ui/react";

export default function ThemeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <header>
            <HStack>
                <Switch
                    onChange={toggleColorMode}
                    colorScheme="green"
                    isChecked={colorMode === "dark"}
                />

                <Text>{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
            </HStack>
        </header>
    );
}
