import {
    Button,
    CircularProgress,
    HStack,
    Image,
    List,
    ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();
    if (error) return null;
    return (
        <List>
            {isLoading && <CircularProgress value={80} />}
            {data.map((genre) => (
                <ListItem key={genre.id}>
                    <HStack paddingY={1}>
                        <Image
                            src={getCroppedImageURL(genre.image_background)}
                            boxSize="32px"
                            borderRadius={8}
                        />
                        <Button
                            fontSize={"20px"}
                            variant="link"
                            onClick={() => onSelectGenre(genre)}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
