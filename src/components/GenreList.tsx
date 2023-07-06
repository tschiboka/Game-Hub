import {
    Button,
    CircularProgress,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();
    if (error) return null;
    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {isLoading && <CircularProgress value={80} />}
                {data.map((genre) => (
                    <ListItem key={genre.id}>
                        <HStack paddingY={1}>
                            <Image
                                src={getCroppedImageURL(genre.image_background)}
                                boxSize="32px"
                                borderRadius={8}
                                objectFit="cover"
                            />
                            <Button
                                fontSize={"20px"}
                                fontWeight={
                                    selectedGenre?.name === genre.name
                                        ? "bold"
                                        : "normal"
                                }
                                whiteSpace="normal"
                                textAlign="left"
                                variant="link"
                                onClick={() => onSelectGenre(genre)}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
