import { HStack, Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { Recommendation } from "./RecommendationBoard";
import { useState } from "react";

interface VotingAreaProps {
    currentUser: string;
    oneRecommendation: Recommendation;
}

export default function VotingArea({
    currentUser,
    oneRecommendation,
}: VotingAreaProps): JSX.Element {
    const [_isLiked, _setLike] = useState<boolean | undefined>(undefined);

    return (
        <>
            {currentUser !== "" && (
                <HStack spacing={4} justifyContent={"right"}>
                    <Tag size={"sm"} variant="subtle" colorScheme="green">
                        <TagLeftIcon boxSize="12px" as={FiThumbsUp} />
                        <TagLabel>{oneRecommendation.like_count}</TagLabel>
                    </Tag>
                    <Tag size={"sm"} variant="subtle" colorScheme="red">
                        <TagLeftIcon boxSize="12px" as={FiThumbsDown} />
                        <TagLabel>{oneRecommendation.dislike_count}</TagLabel>
                    </Tag>
                </HStack>
            )}
        </>
    );
}

//border="2px solid black"
