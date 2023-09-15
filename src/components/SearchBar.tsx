// import { Recommendation } from "./RecommendationBoard";
import {
    Input,
    InputGroup,
    InputLeftElement,
    IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface SearchBarProps {
    searchedPhrase: string;
    setSearchedPhrase: (st: string) => void;
}

export function SearchBar({
    searchedPhrase,
    setSearchedPhrase,
}: SearchBarProps): JSX.Element {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div style={{ width: "70%" }}>
                <InputGroup size="md" margin={"20px"}>
                    <InputLeftElement width="4.5rem">
                        <IconButton
                            h="1.75rem"
                            size="sm"
                            colorScheme="blue"
                            aria-label="Search database"
                            icon={<SearchIcon />}
                        />
                    </InputLeftElement>
                    <Input
                        paddingLeft={"70px"}
                        placeholder="Search for a recommendation..."
                        value={searchedPhrase}
                        onChange={(e) => setSearchedPhrase(e.target.value)}
                    />
                </InputGroup>
            </div>
        </div>
    );
}
