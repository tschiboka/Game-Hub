import { ColorModeScript, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import theme from "./config/theme";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
        null
    );
    const handleSelectGenre = (genre: Genre) => {
        setSelectedGenre(genre);
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
                            selectedGenre={selectedGenre}
                        />
                    </GridItem>
                </Show>
                <GridItem area="main" bg="">
                    <PlatformSelector
                        onSelectPlatform={(platform) =>
                            setSelectedPlatform(platform)
                        }
                        selectedPlatform={selectedPlatform}
                    />
                    <GameGrid
                        selectedGenre={selectedGenre}
                        selectedPlatform={selectedPlatform}
                    />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
