import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

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
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding="10px"
                spacing={10}
            >
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    );
}
