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
            <Card m={5} height={"100%"}>
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
                    <Stack pt={5} pb={5}>
                        <Link href={oneRecommendation.url} isExternal>
                            Resource link
                        </Link>
                        <RecommendationTypeArea
                            oneRecommendation={oneRecommendation}
                        />
                        <TagsArea oneRecommendation={oneRecommendation} />
                    </Stack>
                    <Stack>
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
