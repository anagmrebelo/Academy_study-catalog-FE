import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Input,
} from "@chakra-ui/react";

interface AddResourceUrlProps {
    onClose: () => void;
    isOpen: boolean;
    handleCancel: () => void;
    userUrl: string;
}

export default function AddResouce({
    onClose,
    isOpen,
    handleCancel,
    userUrl,
}: AddResourceUrlProps): JSX.Element {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Please add the Resource information
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input
                            placeholder="Type your URL..."
                            value={userUrl}
                        ></Input>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                        <Button variant="ghost">Add resource</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
