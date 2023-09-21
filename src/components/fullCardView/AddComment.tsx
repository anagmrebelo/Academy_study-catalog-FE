import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { baseURL } from "../App";
import axios from "axios";
import { User } from "../../types/User";
import { RecommendationComment } from "../../types/RecommendationComment";
import { Recommendation } from "../../types/Recommendation";

interface AddCommentProps {
    currentUser: User | undefined;
    oneRecommendation: Recommendation;
    setComments: React.Dispatch<React.SetStateAction<RecommendationComment[]>>;
}

export default function AddComment({
    currentUser,
    oneRecommendation,
    setComments,
}: AddCommentProps): JSX.Element {
    const [commentInput, setCommentInput] = useState("");

    const handleAddComment = async () => {
        if (commentInput === "") {
            return;
        }

        setCommentInput("");
        setComments((prev) => {
            const newComments = [...prev];
            newComments.unshift({
                text: commentInput,
                user_name: currentUser?.user_name as string,
            });

            return newComments;
        });
        try {
            await axios.post(`${baseURL}/comments`, {
                recommendation_url: oneRecommendation.url,
                text: commentInput,
                user_id: currentUser?.id,
            });
        } catch (error) {
            console.error(
                "Handle error from the handle vote function - post vote:",
                error
            );
        }
    };

    return (
        <HStack pt={2} pb={2}>
            <Input
                placeholder="Add a comment..."
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value.slice(0, 500))}
                size="xs"
            />
            <Button size={"xs"} onClick={handleAddComment}>
                Add
            </Button>
        </HStack>
    );
}
