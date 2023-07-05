import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

const GenreList = () => {
    const { data } = useGenres();
    return (
        <List>
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
