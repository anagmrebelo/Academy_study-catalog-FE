import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RecommendationComment } from "../../types/RecommendationComment";
import { User } from "../../types/User";
import { baseURL } from "../App";
import AddComment from "./AddComment";
import { Recommendation } from "../../types/Recommendation";

interface CommentsAreaProps {
    oneRecommendation: Recommendation;
    currentUser: User | undefined;
}

export default function CommentsArea({
    currentUser,
    oneRecommendation,
}: CommentsAreaProps): JSX.Element {
    const [comments, setComments] = useState<RecommendationComment[]>([]);

    useEffect(() => {
        const fetchComments = async () => {
            const encodedUrl = encodeURIComponent(oneRecommendation.url);
            try {
                const result = await axios.get(
                    `${baseURL}/comments/${encodedUrl}`
                );
                setComments(result.data);
            } catch (error) {
                console.error("Handle error from fetching user name:", error);
            }
        };

        fetchComments();
    }, [oneRecommendation.url]);

    return (
        <Box>
            <Heading size="xs" textTransform="uppercase">
                Comments ({comments.length})
            </Heading>
            {currentUser && (
                <AddComment
                    currentUser={currentUser}
                    oneRecommendation={oneRecommendation}
                    setComments={setComments}
                />
            )}
            {comments.map((c) => (
                <>
                    <Flex gap="4" alignItems="center" flexWrap="wrap">
                        <Avatar
                            size={"sm"}
                            icon={<AiOutlineUser fontSize="1rem" />}
                        />
                        <Box pt={4}>
                            <Heading size="xs">{c.text}</Heading>
                            <Text fontSize="xs">Posted by {c.user_name}</Text>
                        </Box>
                    </Flex>
                </>
            ))}
        </Box>
    );
}
