import { Box, Container, HStack, SimpleGrid } from "@chakra-ui/react";
import RecommendationCard from "./RecommendationCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "./App";
import { SearchBar } from "./SearchBar";
import TagCloud from "./TagCloud";
import UserMenu from "./UserMenu";
import { User } from "../types/User";

interface RecommendationBoardProps {
    currentUser: User | undefined;
}

// interface UserComment {
//     user_name: string;
//     comment: string;
// }

export interface Recommendation {
    url: string;
    name: string;
    author: string;
    description: string;
    content_type: string;
    build_phase: string;
    creation_date: Date; //verify specific type for this one
    user_id: number;
    recommendation_type: string;
    // | "I recommend this resource after having used it"
    // | "I do not recommend this resource, having used it"
    // | "I haven't used this resource but it looks promising";
    reason: string;
    like_count: number;
    dislike_count: number;
    tags: string;
}

export default function RecommendationBoard({
    currentUser,
}: RecommendationBoardProps): JSX.Element {
    const [recommendationList, setRecommendationList] = useState<
        Recommendation[]
    >([]);
    const [searchedPhrase, setSearchedPhrase] = useState("");
    const [searchTags, setSearchTags] = useState<string[]>([]);

    useEffect(() => {
        fetchRecentRecommendations(setRecommendationList);
    }, []);

    return (
        <>
            <HStack>
                {currentUser !== undefined && (
                    <UserMenu currentUser={currentUser} />
                )}
                <SearchBar
                    searchedPhrase={searchedPhrase}
                    setSearchedPhrase={setSearchedPhrase}
                    setRecommendationList={setRecommendationList}
                    searchTags={searchTags}
                    setSearchTags={setSearchTags}
                />
            </HStack>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <SimpleGrid spacing="10px" width="70%" columns={3}>
                    {recommendationList.map((r) => (
                        <Box key={r.url}>
                            <RecommendationCard
                                oneRecommendation={r}
                                currentUser={currentUser}
                            />
                        </Box>
                    ))}
                </SimpleGrid>
                <Container width={"30%"}>
                    <TagCloud
                        searchTags={searchTags}
                        setSearchTags={setSearchTags}
                    />
                </Container>
            </div>
        </>
    );
}

export async function fetchRecentRecommendations(
    setRecommendationList: (rec: Recommendation[]) => void
) {
    try {
        const response = await axios.get(`${baseURL}/recommendation/recent10`);
        const responseList = response.data;
        setRecommendationList(responseList);
    } catch (error) {
        console.error(error);
    }
}
