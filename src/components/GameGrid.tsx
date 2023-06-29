import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

export default function GameGrid() {
    const { games, error, isLoading } = useGames();
    return (
        <>
            {error && (
                <Text align="center">
                    Couldn't Fetch Data <br />
                    {error}
                </Text>
            )}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    );
}
