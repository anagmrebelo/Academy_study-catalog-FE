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
    FormControl,
    FormLabel,
    Select,
    Textarea,
    Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { baseURL } from "../App";
import { TagCloudView } from "../TagCloud";
import { User } from "../../types/User";
import { fetchRecommendations } from "../RecommendationBoard";
import { Recommendation } from "../../types/Recommendation";

interface AddResourceUrlProps {
    setRecommendationInputView: (b: boolean) => void;
    onClose: () => void;
    isOpen: boolean;
    handleCancel: () => void;
    userUrl: string;
    setUserUrl: (st: string) => void;
    currentUser: User;
    setRecommendationList: (r: Recommendation[]) => void;
}

export default function AddResouce({
    setRecommendationInputView,
    onClose,
    isOpen,
    handleCancel,
    userUrl,
    setUserUrl,
    currentUser,
    setRecommendationList,
}: AddResourceUrlProps): JSX.Element {
    const [formData, setFormData] = useState({
        name: "",
        author: "",
        description: "",
        tags: "",
        content_type: "",
        build_phase: "",
        recommendation_type: "",
        reason: "",
    });
    const [listOfTags, setListOfTags] = useState<TagCloudView[]>([]);

    const fetchTags = useCallback(async () => {
        try {
            const response = await axios.get(baseURL + "/tag-cloud");
            const tagCloud: TagCloudView[] = response.data;
            setListOfTags(tagCloud);
        } catch (error) {
            console.error("Handle error from the TagComponent:", error);
        }
    }, []);
    useEffect(() => {
        fetchTags();
    }, [fetchTags]);

    async function handleSubmit() {
        const dataToSend = {
            url: userUrl,
            user_id: currentUser.id,
            ...formData,
        };
        if (Object.values(dataToSend).includes("")) {
            alert("Failed to submit. Make sure all fields are completed.");
        } else {
            try {
                const response = await axios.post(baseURL + "/recommendation", {
                    recommendation: dataToSend,
                });

                if (response.status === 200) {
                    setFormData({
                        name: "",
                        author: "",
                        description: "",
                        tags: "",
                        content_type: "",
                        build_phase: "",
                        recommendation_type: "",
                        reason: "",
                    });
                    setUserUrl("");
                    setRecommendationInputView(false);
                    fetchRecommendations(
                        setRecommendationList,
                        false,
                        currentUser.id
                    );

                    onClose();
                }
            } catch (error) {
                alert("Failed to submit. Make sure all fields are completed.");
                console.error("Error:", error);
            }
        }
    }
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
                        <FormControl isRequired>
                            <FormLabel>URL:</FormLabel>
                            <Text
                                fontSize={"sm"}
                                noOfLines={1}
                                marginBottom={"0.5rem"}
                            >
                                {userUrl}
                            </Text>
                            <FormLabel>Name of the resource:</FormLabel>

                            <Input
                                placeholder="Resource name"
                                name="name"
                                marginBottom={"0.5rem"}
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                            />

                            <FormLabel>Author:</FormLabel>
                            <Input
                                placeholder="Author"
                                name="author"
                                marginBottom={"0.5rem"}
                                value={formData.author}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        author: e.target.value,
                                    })
                                }
                            />

                            <FormLabel>Description:</FormLabel>
                            <Textarea
                                placeholder="Description"
                                name="description"
                                marginBottom={"0.5rem"}
                                value={formData.description}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        description: e.target.value,
                                    })
                                }
                            />

                            <FormLabel>Tags (comma-separated):</FormLabel>
                            <Select
                                placeholder="Select tag"
                                name="tag"
                                marginBottom={"0.5rem"}
                                value={formData.tags}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        tags: e.target.value,
                                    })
                                }
                            >
                                {listOfTags.map((tag) => (
                                    <option
                                        value={tag.tag_name}
                                        key={tag.tag_name}
                                    >
                                        {tag.tag_name}
                                    </option>
                                ))}
                            </Select>

                            <FormLabel>Content Type:</FormLabel>
                            <Input
                                placeholder="Content type: video, article, book, etc.."
                                name="content_type"
                                marginBottom={"0.5rem"}
                                value={formData.content_type}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        content_type: e.target.value,
                                    })
                                }
                            />

                            <FormLabel>Build Phase:</FormLabel>
                            <Input
                                placeholder="Build phase"
                                name="build_phase"
                                marginBottom={"0.5rem"}
                                value={formData.build_phase}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        build_phase: e.target.value,
                                    })
                                }
                            />

                            <FormLabel>Recommendation Type:</FormLabel>
                            <Select
                                placeholder="Select recommendation type"
                                name="recommendation_type"
                                marginBottom={"0.5rem"}
                                value={formData.recommendation_type}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        recommendation_type: e.target.value,
                                    })
                                }
                            >
                                <option value="I recommend this resource after having used it">
                                    I recommend this resource after having used
                                    it
                                </option>
                                <option value="I do not recommend this resource, having used it">
                                    I do not recommend this resource, having
                                    used it
                                </option>
                                <option value="I haven't used this resource but it looks promising">
                                    I haven't used this resource but it looks
                                    promising
                                </option>
                            </Select>

                            <FormLabel>Reason:</FormLabel>
                            <Textarea
                                placeholder="Reason"
                                name="reason"
                                marginBottom={"0.5rem"}
                                value={formData.reason}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        reason: e.target.value,
                                    })
                                }
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                        <Button colorScheme="green" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
