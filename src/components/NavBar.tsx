import { Image, HStack } from "@chakra-ui/react";
import Logo from "../assets/Logo/logo.webp";
import ThemeToggle from "./ThemeToggle";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}

export default function NavBar({ onSearch }: Props) {
    return (
        <HStack
            justifyContent={"space-between"}
            padding="10px"
            borderBottom="1px"
        >
            <Image src={Logo} alt="Logo" boxSize="60px" />
            <SearchInput onSearch={onSearch} />
            <ThemeToggle />
        </HStack>
    );
}
