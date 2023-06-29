import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
    FaXbox,
    FaWindows,
    FaApple,
    FaPlaystation,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

export default function PlatformIconList({ platforms }: Props) {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        xbox: FaXbox,
        mac: FaApple,
        playstation: FaPlaystation,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe,
    };

    return (
        <HStack>
            {platforms.map((platform) => (
                <Icon
                    key={platform.id}
                    color="gray.500"
                    boxSize="20px"
                    as={iconMap[platform.slug]}
                ></Icon>
            ))}
        </HStack>
    );
}
