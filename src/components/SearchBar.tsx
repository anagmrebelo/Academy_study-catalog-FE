import { baseURL } from "./App";

import {
    Input,
    InputGroup,
    InputLeftElement,
    IconButton,
} from "@chakra-ui/react";
import { ArrowLeftIcon, SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import { fetchRecentRecommendations } from "./RecommendationBoard";
import { Recommendation } from "../types/Recommendation";
import { User } from "../types/User";

interface SearchBarProps {
    searchedPhrase: string;
    setSearchedPhrase: (st: string) => void;
    setRecommendationList: (arr: Recommendation[]) => void;
    searchTags: string[];
    setSearchTags: (st: string[]) => void;
    currentUser: User | undefined;
}

export function SearchBar({
    searchedPhrase,
    setSearchedPhrase,
    setRecommendationList,
    searchTags,
    setSearchTags,
    currentUser,
}: SearchBarProps): JSX.Element {
    async function handleSearch() {
        let editedSearchPhrase = searchedPhrase;
        editedSearchPhrase === ""
            ? (editedSearchPhrase = "null")
            : editedSearchPhrase.replace(/ /g, "%20");
        let editedTags = searchTags.join("").replace(/#/g, "%23");
        if (editedTags === "") {
            editedTags = "null";
        }

        try {
            const response = await axios.get(
                `${baseURL}/recommendation/${editedSearchPhrase}/${editedTags}`
            );
            const responseList = response.data;
            setRecommendationList(responseList);
        } catch (error) {
            console.error("Handle search error", error);
        }
    }
    const handleReset = () => {
        setSearchTags([]);
        setSearchedPhrase("");
        fetchRecommendations(setRecommendationList, false, currentUser?.id);
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div style={{ width: "70%" }}>
                <InputGroup size="md" margin={"0.5rem"}>
                    <InputLeftElement
                        width="4.5rem"
                        gap={"0.5rem"}
                        marginLeft={"0.5rem"}
                    >
                        <IconButton
                            h="1.75rem"
                            size="sm"
                            colorScheme="orange"
                            aria-label="Reset search"
                            icon={<ArrowLeftIcon />}
                            onClick={handleReset}
                        />
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
                        paddingLeft={"100px"}
                        placeholder="Search for a recommendation..."
                        value={searchedPhrase}
                        onChange={(e) => setSearchedPhrase(e.target.value)}
                    />
                </InputGroup>
            </div>
        </div>
    );
}
