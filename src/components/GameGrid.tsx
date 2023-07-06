import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";

interface Props {
    selectedGenre: Genre | null;
}

export default function GameGrid({ selectedGenre }: Props) {
    const { data, error, isLoading } = useData<Game>(
        "/games",
        {
            params: { genres: selectedGenre?.id },
        },
        [selectedGenre?.id]
    );
    const skeletons = [1, 2, 3, 4, 5, 6];
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
                spacing={3}
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
