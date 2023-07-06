import { ColorModeScript, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import theme from "./config/theme";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
    const handleSelectGenre = (genre: Genre) => {
        setGameQuery({ ...gameQuery, genre });
    };

    return (
        <>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`,
                }}
                templateColumns={{
                    base: "1fr",
                    lg: "300px 1fr",
                }}
            >
                <GridItem area="nav" bg="">
                    <NavBar></NavBar>
                </GridItem>
                <Show above="lg">
                    <GridItem area="aside" bg="" paddingX="10px">
                        <GenreList
                            onSelectGenre={handleSelectGenre}
                            selectedGenre={gameQuery.genre}
                        />
                    </GridItem>
                </Show>
                <GridItem area="main" bg="">
                    <PlatformSelector
                        onSelectPlatform={(platform) =>
                            setGameQuery({ ...gameQuery, platform })
                        }
                        selectedPlatform={gameQuery.platform}
                    />
                    <GameGrid gameQuery={gameQuery} />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
