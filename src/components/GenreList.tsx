import {
    CircularProgress,
    HStack,
    Image,
    List,
    ListItem,
    Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

const GenreList = () => {
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
                        <Text fontSize={"20px"}>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
