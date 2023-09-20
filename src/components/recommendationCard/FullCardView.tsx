import {
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";
import { Recommendation } from "../RecommendationBoard";
import TagsArea from "./TagsArea";
import ReasonArea from "./ReasonArea";

interface FullCardViewProps {
    isOpen: boolean;
    onClose: () => void;
    oneRecommendation: Recommendation;
}

export default function FullCardView({
    isOpen,
    onClose,
    oneRecommendation,
}: FullCardViewProps): JSX.Element {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{oneRecommendation.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Author: {oneRecommendation.author}</Text>
                    <Text>Link: {oneRecommendation.url}</Text>
                    <Text>Description: {oneRecommendation.description}</Text>
                    <HStack>
                        <Text>Tags: </Text>
                        <TagsArea oneRecommendation={oneRecommendation} />
                    </HStack>
                    <Text>Content type: {oneRecommendation.content_type}</Text>
                    <Text>Build phase: {oneRecommendation.build_phase}</Text>
                    {/* <Text>
                        Created at:{" "}
                        {oneRecommendation.creation_date.toDateString()}
                    </Text> */}
                    <Text>
                        Recommended by: user id {oneRecommendation.user_id}
                    </Text>
                    <HStack>
                        <Text>Reason to recommend: </Text>
                        <ReasonArea oneRecommendation={oneRecommendation} />
                    </HStack>
                    <Text>Other observations: {oneRecommendation.reason}</Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
