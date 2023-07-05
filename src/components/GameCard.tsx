import { Card, CardBody, CardFooter, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameScore from "./GameScore";
import getCroppedImageURL from "../services/image-url";

interface Props {
    game: Game;
}
export default function GameCard({ game }: Props) {
    return (
        <Card borderRadius={10} overflow={"hidden"}>
            <Image src={getCroppedImageURL(game.background_image)}></Image>
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
            </CardBody>
            <CardFooter justifyContent="space-between">
                <PlatformIconList
                    platforms={game.parent_platforms.map((p) => p.platform)}
                />
                <GameScore game={game} />
            </CardFooter>
        </Card>
    );
}
