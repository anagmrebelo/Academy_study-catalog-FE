import {
    Card,
    CardBody,
    Heading,
    Image,
    Link,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";
import { Recommendation } from "../../types/Recommendation";
import { User } from "../../types/User";
import FullCardView from "../fullCardView/FullCardView";
import RecommendationTypeArea from "./RecommendationTypeArea";
import TagsArea from "./TagsArea";
import VotingArea from "./VotingArea";

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
            <Card>
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
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                        onClick={onOpen}
                    />
                    <Stack p={4}>
                        <Link href={oneRecommendation.url} isExternal>
                            Resource link
                        </Link>
                        <RecommendationTypeArea
                            oneRecommendation={oneRecommendation}
                        />
                        <TagsArea oneRecommendation={oneRecommendation} />
                    </Stack>
                    <VotingArea
                        currentUser={currentUser}
                        oneRecommendation={oneRecommendation}
                        setRecommendationList={setRecommendationList}
                    />
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
