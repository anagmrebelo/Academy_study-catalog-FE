import {
    Card,
    CardBody,
    HStack,
    Heading,
    Image,
    Link,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";
import { User } from "../../types/User";
import FullCardView from "../fullCardView/FullCardView";
import RecommendationTypeArea from "./RecommendationTypeArea";
import TagsArea from "./TagsArea";
import VotingArea from "./VotingArea";
import { CheckboxArea } from "./CheckboxArea";
import { Recommendation } from "../../types/Recommendation";

interface RecommendationCardProps {
    currentUser: User | undefined;
    oneRecommendation: Recommendation;
    setRecommendationList: React.Dispatch<
        React.SetStateAction<Recommendation[]>
    >;
}

export default function RecommendationCard({
    currentUser,
    oneRecommendation,
    setRecommendationList,
}: RecommendationCardProps): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Card height={"100%"}>
                <CardBody>
                    <Heading
                        data-testid="card-heading"
                        size="md"
                        textTransform="uppercase"
                        textAlign={"center"}
                        noOfLines={1}
                    >
                        {oneRecommendation.name}
                    </Heading>
                    <Image
                        src={oneRecommendation.thumbnail_url}
                        alt="Image not found"
                        borderRadius="lg"
                        onClick={onOpen}
                        height={currentUser ? "50%" : "60%"}
                        width={"100%"}
                        objectFit={"cover"}
                    />
                    <Stack p={5}>
                        <Link href={oneRecommendation.url} isExternal>
                            Resource link
                        </Link>
                        <RecommendationTypeArea
                            oneRecommendation={oneRecommendation}
                        />
                        <TagsArea oneRecommendation={oneRecommendation} />
                    </Stack>
                    <HStack justifyContent={"space-between"} pr={5} pl={5}>
                        <CheckboxArea
                            currentUser={currentUser}
                            oneRecommendation={oneRecommendation}
                        />
                        <VotingArea
                            currentUser={currentUser}
                            oneRecommendation={oneRecommendation}
                            setRecommendationList={setRecommendationList}
                        />
                    </HStack>
                </CardBody>
            </Card>
            <FullCardView
                isOpen={isOpen}
                onClose={onClose}
                oneRecommendation={oneRecommendation}
                currentUser={currentUser}
            />
        </>
    );
}
