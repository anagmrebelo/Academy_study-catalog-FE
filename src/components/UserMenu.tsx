import { Button } from "@chakra-ui/react";
import CheckAndAddResources from "./CheckAndAddResources";
import { User } from "../types/User";

interface UserMenuProps {
    currentUser: User;
    studyView: boolean;
    setStudyView: (b: boolean) => void;
}

export default function UserMenu({
    currentUser,
    studyView,
    setStudyView,
}: UserMenuProps): JSX.Element {
    return (
        <>
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
            <CheckAndAddResources currentUser={currentUser} />
        </>
    );
}
