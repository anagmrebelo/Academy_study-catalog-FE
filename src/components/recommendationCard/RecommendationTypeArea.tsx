import { Badge } from "@chakra-ui/react";
import { Recommendation } from "../../types/Recommendation";

interface ReasonAreaProps {
    oneRecommendation: Recommendation;
}

export default function RecommendationTypeArea({
    oneRecommendation,
}: ReasonAreaProps): JSX.Element {
    return (
        <Badge colorScheme="purple" whiteSpace="normal" noOfLines={3}>
            {oneRecommendation.recommendation_type}
        </Badge>
    );
}
