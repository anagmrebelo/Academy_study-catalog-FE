import { Box, SimpleGrid } from "@chakra-ui/react";
import RecommendationCard from "./recommendationCard/RecommendationCard";
import { Recommendation } from "../../../../types/Recommendation";
import { User } from "../../../../types/User";

interface RecommendationListProps {
    recommendationList: Recommendation[];
    setRecommendationList: React.Dispatch<
        React.SetStateAction<Recommendation[]>
    >;
    currentUser: User | undefined;
}

export default function RecommendationList({
    recommendationList,
    setRecommendationList,
    currentUser,
}: RecommendationListProps): JSX.Element {
    return (
        <SimpleGrid spacing="10px" minWidth="70%" columns={3}>
            {recommendationList.map((r) => (
                <Box key={r.url}>
                    <RecommendationCard
                        setRecommendationList={setRecommendationList}
                        oneRecommendation={r}
                        currentUser={currentUser}
                    />
                </Box>
            ))}
        </SimpleGrid>
    );
}
