import {
    Badge,
    Card,
    CardBody,
    HStack,
    Heading,
    Image,
    Link,
    Stack,
    Tag,
    TagLabel,
    TagLeftIcon,
} from "@chakra-ui/react";
import { Recommendation } from "./RecommendationBoard";

import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";

interface RecommendationCardProps {
    currentUser: string;
    oneRecommendation: Recommendation;
}

export default function RecommendationCard({
    currentUser,
    oneRecommendation,
}: RecommendationCardProps): JSX.Element {
    return (
        <>
            <Card>
                <CardBody>
                    <Heading
                        size="md"
                        textTransform="uppercase"
                        textAlign={"center"}
                    >
                        {oneRecommendation.name}
                    </Heading>
                    <Image
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                    />
                    <Stack p={4}>
                        <Link href={oneRecommendation.url} isExternal>
                            Resource link
                        </Link>
                        <Badge colorScheme="purple">
                            {oneRecommendation.recommendation_type}
                        </Badge>
                        <Stack direction="row">
                            {oneRecommendation.tags.map((t) => (
                                <Badge
                                    key={t}
                                    borderRadius="full"
                                    px="2"
                                    colorScheme="teal"
                                >
                                    {t}
                                </Badge>
                            ))}
                        </Stack>
                    </Stack>
                    {currentUser !== "" && (
                        <HStack spacing={4} justifyContent={"right"}>
                            <Tag
                                size={"sm"}
                                variant="subtle"
                                colorScheme="green"
                            >
                                <TagLeftIcon boxSize="12px" as={FiThumbsUp} />
                                <TagLabel>{oneRecommendation.likes}</TagLabel>
                            </Tag>
                            <Tag size={"sm"} variant="subtle" colorScheme="red">
                                <TagLeftIcon boxSize="12px" as={FiThumbsDown} />
                                <TagLabel>
                                    {oneRecommendation.dislikes}
                                </TagLabel>
                            </Tag>
                        </HStack>
                    )}
                </CardBody>
            </Card>
        </>
    );
}
