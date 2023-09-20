import { Badge } from "@chakra-ui/react";
import { Recommendation } from "../RecommendationBoard";

interface ReasonAreaProps {
    oneRecommendation: Recommendation;
}

export default function ReasonArea({
    oneRecommendation,
}: ReasonAreaProps): JSX.Element {
    return (
        <Badge colorScheme="purple" whiteSpace="normal" noOfLines={3}>
            {oneRecommendation.recommendation_type}
        </Badge>
    );
}
