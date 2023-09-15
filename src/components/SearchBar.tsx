import { baseURL } from "./App";

import {
    Input,
    InputGroup,
    InputLeftElement,
    IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Recommendation } from "./RecommendationBoard";

interface SearchBarProps {
    searchedPhrase: string;
    setSearchedPhrase: (st: string) => void;
    setRecommendationList: (arr: Recommendation[]) => void;
}

export function SearchBar({
    searchedPhrase,
    setSearchedPhrase,
    setRecommendationList,
}: SearchBarProps): JSX.Element {
    async function handleSearch() {
        const editedSearchPhrase = searchedPhrase.replace(/ /g, "%20");
        try {
            const response = await axios.get(
                `${baseURL}/recommendation/${editedSearchPhrase}/tags`
            );
            const responseList = response.data;
            setRecommendationList(responseList);
        } catch (error) {
            console.error("Handle search error", error);
        }
    }
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
                            onClick={handleSearch}
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
