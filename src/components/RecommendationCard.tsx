import {
    Badge,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";

interface RecommendationCardProps {
    currentUser: string;
}

export default function RecommendationCard({
    currentUser,
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
                        Title of the resource
                    </Heading>

                    <Image
                        src="https://www.youtube.com/watch?v=zAxmn4ihqNg"
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
                </CardBody>
            </Card>
        </>
    );
}
