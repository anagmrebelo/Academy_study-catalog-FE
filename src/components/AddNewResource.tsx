import {
    useDisclosure,
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
import axios from "axios";
import { baseURL } from "./App";
import { useState } from "react";

export default function AddNewResource(): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [userUrl, setUserUrl] = useState("");

    async function handleCheckURL() {
        try {
            const response = await axios.post(`${baseURL}/recommendation/url`, {
                url: userUrl,
            });
            const responseInfo = response.data;
            console.log(responseInfo);
        } catch (error) {
            console.error("this is our error", error);
        }
    }

    return (
        <>
            <Button onClick={onOpen}>Add new resource</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Check if URL exists</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>
                            Please enter the URL to check if it already exists
                        </p>
                        <Input
                            placeholder="Type your URL..."
                            value={userUrl}
                            onChange={(e) => setUserUrl(e.target.value)}
                        ></Input>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button variant="ghost" onClick={handleCheckURL}>
                            Check URL
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
