import { SimpleGrid } from "@chakra-ui/react";
import RecommendationCard from "./RecommendationCard";
import { useEffect, useState } from "react";
// import { recommendationStartingList } from "./recommendationStartingList";
import axios from "axios";
import { baseURL } from "./App";
import { SearchBar } from "./SearchBar";

interface RecommendationBoardProps {
    currentUser: string;
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
    likes: number;
    dislikes: number;
    tags: string;
}

export default function RecommendationBoard({
    currentUser,
}: RecommendationBoardProps): JSX.Element {
    const [recommendationList, setRecommendationList] = useState<
        Recommendation[]
    >([]);
    const [searchedPhrase, setSearchedPhrase] = useState("");

    useEffect(() => {
        async function fetchRecentRecommendations() {
            try {
                const response = await axios.get(
                    `${baseURL}/recommendation/recent10`
                );
                const responseList = response.data;
                setRecommendationList(responseList);
            } catch (error) {
                console.error(error);
            }
        }

        fetchRecentRecommendations();

        // setRecommendationList(recommendationStartingList);
    }, []);

    return (
        <>
            <SearchBar
                searchedPhrase={searchedPhrase}
                setSearchedPhrase={setSearchedPhrase}
            />
            <SimpleGrid minChildWidth="100px" spacing="10px">
                {recommendationList.map((r) => (
                    <RecommendationCard
                        key={r.url}
                        oneRecommendation={r}
                        currentUser={currentUser}
                    />
                ))}
            </SimpleGrid>
        </>
    );
}
