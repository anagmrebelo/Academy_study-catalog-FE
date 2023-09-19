import { HStack, Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { Recommendation } from "./RecommendationBoard";

interface VotingAreaProps {
    currentUser: string;
    oneRecommendation: Recommendation;
}

export default function VotingArea({
    currentUser,
    oneRecommendation,
}: VotingAreaProps): JSX.Element {
    return (
        <>
            {currentUser !== "" && (
                <HStack spacing={4} justifyContent={"right"}>
                    <Tag size={"sm"} variant="subtle" colorScheme="green">
                        <TagLeftIcon boxSize="12px" as={FiThumbsUp} />
                        <TagLabel>{oneRecommendation.likes}</TagLabel>
                    </Tag>
                    <Tag size={"sm"} variant="subtle" colorScheme="red">
                        <TagLeftIcon boxSize="12px" as={FiThumbsDown} />
                        <TagLabel>{oneRecommendation.dislikes}</TagLabel>
                    </Tag>
                </HStack>
            )}
        </>
    );
}
