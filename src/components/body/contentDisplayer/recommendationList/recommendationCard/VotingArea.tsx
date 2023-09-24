import { HStack, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { Recommendation } from "../../../../../types/Recommendation";
import { User } from "../../../../../types/User";
import { baseURL } from "../../../../App";

interface VotingAreaProps {
    currentUser: User | undefined;
    oneRecommendation: Recommendation;
    setRecommendationList: React.Dispatch<
        React.SetStateAction<Recommendation[]>
    >;
}

export default function VotingArea({
    currentUser,
    oneRecommendation,
    setRecommendationList,
}: VotingAreaProps): JSX.Element {
    const [voteState, setVoteState] = useState<boolean | undefined>(undefined);
    const encodedUrl = encodeURIComponent(oneRecommendation.url);

    const deleteVote = async () => {
        try {
            await axios.delete(
                `${baseURL}/votes/${currentUser?.id}/${encodedUrl}`
            );
        } catch (error) {
            console.error(
                "Handle error from the handle vote function - delete vote:",
                error
            );
        }
    };

    const postVote = async (newVote: boolean) => {
        try {
            await axios.post(`${baseURL}/votes`, {
                is_like: newVote,
                url: oneRecommendation.url,
                user_id: currentUser?.id,
            });
        } catch (error) {
            console.error(
                "Handle error from the handle vote function - post vote:",
                error
            );
        }
    };

    const updateVoteCount = async () => {
        try {
            const response = await axios.get(`${baseURL}/votes/${encodedUrl}`);
            const { newLikeCount, newDislikeCount } = response.data;
            setRecommendationList((prev) =>
                prev.map((r) => {
                    if (r.url === oneRecommendation.url) {
                        const updatedRecommendation = { ...oneRecommendation };
                        updatedRecommendation.like_count = newLikeCount;
                        updatedRecommendation.dislike_count = newDislikeCount;

                        return updatedRecommendation;
                    }
                    return r;
                })
            );
        } catch (error) {
            console.error(
                "Handle error from the handle vote function - update vote count:",
                error
            );
        }
    };

    const handleVote = async (value: boolean) => {
        const newVote = value === voteState ? undefined : value;
        setVoteState(newVote);

        if (newVote === undefined) {
            await deleteVote();
        } else {
            await postVote(newVote);
        }

        await updateVoteCount();
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
