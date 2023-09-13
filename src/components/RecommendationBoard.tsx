import { SimpleGrid } from "@chakra-ui/react";
import RecommendationCard from "./RecommendationCard";
import { useEffect, useState } from "react";
// import axios from "axios";
// import { baseURL } from "./App";

interface RecommendationBoardProps {
    currentUser: string;
}

export interface Recommendation {
    url: string;
    listOfTags: string[];
}

export default function RecommendationBoard({
    currentUser,
}: RecommendationBoardProps): JSX.Element {
    const [recommendationList, setRecommendationList] = useState<
        Recommendation[]
    >([]);

    useEffect(() => {
        // async function fetchRecentRecommendations() {
        //     try {
        //         const response = await axios.get(
        //             `${baseURL}/recommendation/recent10`
        //         );
        //         const responseList = response.data;
        //         setRecommendationList(responseList);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }

        // fetchRecentRecommendations();

        const recommendationStartingList = [
            { url: "adfd", listOfTags: ["java", "python"] },
            { url: "adsf", listOfTags: ["java", "python"] },
            { url: "asdf", listOfTags: ["java", "python"] },
        ];
        setRecommendationList(recommendationStartingList);
    }, []);

    return (
        <SimpleGrid minChildWidth="300px" spacing="40px">
            {recommendationList.map((r) => (
                <RecommendationCard
                    key={r.url}
                    oneRecommendation={r}
                    currentUser={currentUser}
                />
            ))}
        </SimpleGrid>
    );
}
