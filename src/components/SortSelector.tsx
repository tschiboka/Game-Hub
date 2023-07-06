import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date Added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release Date" },
        { value: "metacritic", label: "Popularity" },
        { value: "-rating", label: "Average Rating" },
    ];
    const currentSortOrder = (sortOrder: string) =>
        sortOrders.find((order) => order.value === sortOrder);
    console.log(currentSortOrder(sortOrder));
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={BsChevronDown}>
                Order by: {currentSortOrder(sortOrder)?.label || "Relevance"}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem
                        key={order.value}
                        value={order.value}
                        onClick={() => onSelectSortOrder(order.value)}
                    >
                        {order.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
