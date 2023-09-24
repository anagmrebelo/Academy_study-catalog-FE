import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Input,
    ModalFooter,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { baseURL } from "../App";

interface CheckUrlProps {
    setRecommendationInputView: (b: boolean) => void;
    onClose: () => void;
    isOpen: boolean;
    userUrl: string;
    setUserUrl: (s: string) => void;
    handleCancel: () => void;
}

export default function CheckUrl({
    setRecommendationInputView,
    onClose,
    isOpen,
    userUrl,
    setUserUrl,
    handleCancel,
}: CheckUrlProps): JSX.Element {
    const [urlStatus, setUrlStatus] = useState<number>();

    function handleProceed() {
        setRecommendationInputView(true);
    }

    async function handleCheckURL() {
        if (userUrl === "") {
            alert("Please input a valid URL");
        } else {
            try {
                const encodedUrl = encodeURIComponent(userUrl);
                const response = await axios.get(
                    `${baseURL}/recommendation/validate/${encodedUrl}`
                );
                const responseInfo = response.status;
                setUrlStatus(responseInfo);
            } catch (error) {
                console.error("Error on handleCheckURL", error);
            }
        }
    }

    return (
        <>
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
                            <Button colorScheme="green" onClick={handleProceed}>
                                Proceed
                            </Button>
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
