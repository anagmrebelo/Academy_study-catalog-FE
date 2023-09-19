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
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
} from "@chakra-ui/react";
import axios from "axios";
import { baseURL } from "./App";
import { useState } from "react";

export default function AddNewResource(): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [userUrl, setUserUrl] = useState("");
    const [urlStatus, setUrlStatus] = useState<number>();

    function handleCancel() {
        onClose();
        setUrlStatus(0);
    }

    async function handleCheckURL() {
        if (userUrl === "") {
            alert("Please input a valid URL");
        } else {
            try {
                const response = await axios.post(
                    `${baseURL}/recommendation/url`,
                    {
                        url: userUrl,
                    }
                );
                const responseInfo = response.status;
                setUrlStatus(responseInfo);
                console.log(responseInfo);
            } catch (error) {
                console.error("this is our error", error);
            }
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
                        <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                        <Button variant="ghost" mr={3} onClick={handleCheckURL}>
                            Check URL
                        </Button>
                        {urlStatus === 201 && (
                            <Button colorScheme="green">Proceed</Button>
                        )}
                    </ModalFooter>
                    {urlStatus === 202 && (
                        <Alert status="error">
                            <AlertIcon />
                            <AlertTitle>URL Already exists!</AlertTitle>
                            <AlertDescription>
                                Please try inputting a different URL or cancel
                            </AlertDescription>
                        </Alert>
                    )}
                    {urlStatus === 201 && (
                        <Alert status="success">
                            <AlertIcon />
                            <AlertTitle>Valid URL</AlertTitle>
                            <AlertDescription>
                                Please add the new resource
                            </AlertDescription>
                        </Alert>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
