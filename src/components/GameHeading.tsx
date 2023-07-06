import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    let headingText = `${gameQuery.genre?.name || ""} ${
        gameQuery.platform?.name || ""
    } Games`;
    return (
        <Heading as="h1" paddingLeft={"10px"} fontSize={"40px"} marginTop={5}>
            {headingText}
        </Heading>
    );
};

export default GameHeading;
