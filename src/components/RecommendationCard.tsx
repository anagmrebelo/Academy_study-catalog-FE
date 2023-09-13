import {
    Badge,
    Button,
    Card,
    CardBody,
    Heading,
    Image,
    Link,
    Stack,
} from "@chakra-ui/react";
import { Recommendation } from "./RecommendationBoard";

interface RecommendationCardProps {
    currentUser: string;
    oneRecommendation: Recommendation;
}

export default function RecommendationCard({
    currentUser,
    oneRecommendation,
}: RecommendationCardProps): JSX.Element {
    const listOfTags = ["Java", "React", "Typescript"];

    return (
        <>
            <Card maxW="sm">
                <CardBody>
                    <Heading
                        size="md"
                        textTransform="uppercase"
                        textAlign={"center"}
                    >
                        Title of the resource {oneRecommendation.url}
                    </Heading>
                    <Image
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                    />
                    <Stack p={4}>
                        <Link href="" isExternal>
                            Resource link
                        </Link>
                        <Badge colorScheme="purple">
                            Type of recommendation
                        </Badge>
                        <Stack direction="row">
                            {listOfTags.map((t) => (
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
                    {currentUser !== "" && <Button>Hi</Button>}
                </CardBody>
            </Card>
        </>
    );
}
