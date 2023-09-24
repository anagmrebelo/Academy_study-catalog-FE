import { ArrowLeftIcon, SearchIcon } from "@chakra-ui/icons";
import {
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { Recommendation } from "../../../types/Recommendation";
import { User } from "../../../types/User";
import { baseURL } from "../../App";
import { fetchRecommendations } from "./ContentDisplayer";

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
        <Stack minWidth={"45vw"}>
            <InputGroup size="md">
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
        </Stack>
    );
}
