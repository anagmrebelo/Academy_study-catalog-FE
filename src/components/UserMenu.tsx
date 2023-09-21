import { Button, ButtonGroup } from "@chakra-ui/react";
import CheckAndAddResources from "./CheckAndAddResources";
import { User } from "../types/User";
import { Recommendation } from "./RecommendationBoard";

interface UserMenuProps {
    currentUser: User;
    studyView: boolean;
    setStudyView: (b: boolean) => void;
    setRecommendationList: (r: Recommendation[]) => void;
}

export default function UserMenu({
    currentUser,
    studyView,
    setStudyView,
    setRecommendationList,
}: UserMenuProps): JSX.Element {
    return (
        <ButtonGroup gap={"0.5vw"}>
            {!studyView && (
                <Button onClick={() => setStudyView(true)}>
                    My Study View
                </Button>
            )}
            {studyView && (
                <Button onClick={() => setStudyView(false)}>
                    To Home View
                </Button>
            )}
            <CheckAndAddResources
                currentUser={currentUser}
                setRecommendationList={setRecommendationList}
            />
        </ButtonGroup>
    );
}
