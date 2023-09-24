import { Button, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { Recommendation } from "../../../../../types/Recommendation";
import { User } from "../../../../../types/User";
import RecommendationForm from "./RecommendationForm";
import UrlChecker from "./UrlChecker";

interface NewRecommendationProps {
    currentUser: User;
    setRecommendationList: (r: Recommendation[]) => void;
}

export default function NewRecommendation({
    currentUser,
    setRecommendationList,
}: NewRecommendationProps): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [userUrl, setUserUrl] = useState("");
    const [recommendationInputView, setRecommendationInputView] =
        useState<boolean>(false);

    function handleCancel() {
        setUserUrl("");
        onClose();
        setRecommendationInputView(false);
    }

    return (
        <>
            <Button onClick={onOpen}>Add new resource</Button>
            {!recommendationInputView && (
                <UrlChecker
                    setRecommendationInputView={setRecommendationInputView}
                    onClose={onClose}
                    isOpen={isOpen}
                    userUrl={userUrl}
                    setUserUrl={setUserUrl}
                    handleCancel={handleCancel}
                />
            )}
            {recommendationInputView && (
                <RecommendationForm
                    setRecommendationList={setRecommendationList}
                    setRecommendationInputView={setRecommendationInputView}
                    onClose={onClose}
                    isOpen={isOpen}
                    handleCancel={handleCancel}
                    userUrl={userUrl}
                    setUserUrl={setUserUrl}
                    currentUser={currentUser}
                />
            )}
        </>
    );
}
