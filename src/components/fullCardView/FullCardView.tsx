import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    Stack,
    StackDivider,
} from "@chakra-ui/react";
import { Recommendation } from "../../types/Recommendation";
import { User } from "../../types/User";
import CommentsArea from "./CommentsArea";
import FullCardDetails from "./FullCardDetails";
import FullCardHeader from "./FullCardHeader";

interface FullCardViewProps {
    isOpen: boolean;
    onClose: () => void;
    oneRecommendation: Recommendation;
    currentUser: User | undefined;
}

export default function FullCardView({
    isOpen,
    onClose,
    oneRecommendation,
    currentUser,
}: FullCardViewProps): JSX.Element {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <FullCardHeader oneRecommendation={oneRecommendation} />
                <ModalBody>
                    <Stack divider={<StackDivider />} spacing="4">
                        <FullCardDetails
                            oneRecommendation={oneRecommendation}
                        />
                        <CommentsArea
                            currentUser={currentUser}
                            oneRecommendation={oneRecommendation}
                        />
                    </Stack>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    );
}
