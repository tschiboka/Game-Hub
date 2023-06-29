import { ColorModeScript, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import theme from "./config/theme";

function App() {
    return (
        <>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`,
                }}
            >
                <GridItem area="nav" bg="">
                    <NavBar></NavBar>
                </GridItem>
                <Show above="lg">
                    <GridItem area="aside" bg="">
                        Aside
                    </GridItem>
                </Show>
                <GridItem area="main" bg="">
                    Main
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
