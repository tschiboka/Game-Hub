import { Image, HStack, Text } from "@chakra-ui/react";
import Logo from "../assets/Logo/logo.webp";

export default function NavBar() {
    return (
        <HStack>
            <Image src={Logo} alt="Logo" boxSize="70px" />
            <Text>Nav Bar</Text>
        </HStack>
    );
}
