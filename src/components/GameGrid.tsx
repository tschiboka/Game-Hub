import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";
import GameHeading from "./GameHeading";

interface Props {
    gameQuery: GameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];
    if (error)
        return (
            <Text align="center">
                Couldn't Fetch Data <br />
                {error}
            </Text>
        );
    return (
        <>
            <GameHeading gameQuery={gameQuery} />
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding="10px"
                spacing={6}
            >
                {isLoading &&
                    skeletons.map((id) => <GameCardSkeleton key={id} />)}
                {data.map((game: Game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    );
}
