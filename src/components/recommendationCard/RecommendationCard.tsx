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
import { CheckboxArea } from "./CheckboxArea";
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
            <Card height={"100%"}>
                <CardBody>
                    <Stack spacing={2}>
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
                            width={"100%"}
                            objectFit={"cover"}
                            height={"25vh"}
                        />
                        <Link href={oneRecommendation.url} isExternal>
                            Link to recommended resource
                        </Link>
                        <RecommendationTypeArea
                            oneRecommendation={oneRecommendation}
                        />
                        <TagsArea oneRecommendation={oneRecommendation} />
                        <CheckboxArea
                            currentUser={currentUser}
                            oneRecommendation={oneRecommendation}
                        />
                        <VotingArea
                            currentUser={currentUser}
                            oneRecommendation={oneRecommendation}
                            setRecommendationList={setRecommendationList}
                        />
                    </Stack>
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
