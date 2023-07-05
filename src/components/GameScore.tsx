import { Badge } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
    game: Game;
}

export default function GameScore({ game }: Props) {
    const score = game.metacritic;
    const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
    return (
        <Badge
            fontSize={"14px"}
            paddingX={2}
            borderRadius={"4px"}
            colorScheme={color}
        >
            {score}
        </Badge>
    );
}
