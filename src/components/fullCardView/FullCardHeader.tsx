import {
    Avatar,
    Box,
    Flex,
    Heading,
    ModalHeader,
    Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Recommendation } from "../../types/Recommendation";
import { baseURL } from "../App";

interface FullCardHeaderProps {
    oneRecommendation: Recommendation;
}

export default function FullCardHeader({
    oneRecommendation,
}: FullCardHeaderProps): JSX.Element {
    const [userName, setUserName] = useState("");
    const dateOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const result = await axios.get(
                    `${baseURL}/users/${oneRecommendation.user_id}`
                );
                setUserName(result.data.user_name);
            } catch (error) {
                console.error("Handle error from fetching user name:", error);
            }
        };

        fetchUserName();
    }, [oneRecommendation.user_id]);

    return (
        <ModalHeader>
            <Heading size="lg" textTransform="uppercase">
                {oneRecommendation.name}
            </Heading>
            <Flex pt={2} gap="4" alignItems="center" flexWrap="wrap">
                <Avatar size="sm" icon={<AiOutlineUser fontSize="1rem" />} />
                <Box>
                    <Heading size="xs">Recommended by {userName}</Heading>
                    <Text fontSize="xs" fontWeight={"normal"}>
                        {new Date(
                            oneRecommendation.creation_date
                        ).toLocaleDateString(undefined, dateOptions)}
                    </Text>
                </Box>
            </Flex>
        </ModalHeader>
    );
}
