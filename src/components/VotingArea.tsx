import { HStack, Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { Recommendation } from "./RecommendationBoard";
import { useState } from "react";
import { User } from "../types/User";

interface VotingAreaProps {
    currentUser: User | undefined;
    oneRecommendation: Recommendation;
}

export default function VotingArea({
    currentUser,
    oneRecommendation,
}: VotingAreaProps): JSX.Element {
    const [voteState, setVoteState] = useState<boolean | undefined>(undefined);

    // { user_id, url, is_like }
    const handleVote = (value: boolean) => {
        const newVote = value === voteState ? undefined : value;
        // true => post request /votes {is_like: value, url: oneRecommendation.url, user_id: }
        setVoteState(newVote);
    };

    const setVoteBorder = (value: boolean) => {
        return value === voteState ? "2px solid black" : "";
    };

    return (
        <>
            {currentUser !== undefined && (
                <HStack spacing={4} justifyContent={"right"}>
                    <Tag
                        size={"sm"}
                        variant="subtle"
                        colorScheme="green"
                        onClick={() => handleVote(true)}
                        border={setVoteBorder(true)}
                    >
                        <TagLeftIcon boxSize="12px" as={FiThumbsUp} />
                        <TagLabel>{oneRecommendation.like_count}</TagLabel>
                    </Tag>
                    <Tag
                        size={"sm"}
                        variant="subtle"
                        colorScheme="red"
                        onClick={() => handleVote(false)}
                        border={setVoteBorder(false)}
                    >
                        <TagLeftIcon boxSize="12px" as={FiThumbsDown} />
                        <TagLabel>{oneRecommendation.dislike_count}</TagLabel>
                    </Tag>
                </HStack>
            )}
        </>
    );
}

//border="2px solid black"
