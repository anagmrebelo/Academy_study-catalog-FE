import { Button } from "@chakra-ui/react";
import CheckAndAddResources from "./CheckAndAddResources";
import { User } from "../types/User";

interface UserMenuProps {
    currentUser: User;
}

export default function UserMenu({ currentUser }: UserMenuProps): JSX.Element {
    return (
        <>
            <Button>My Study View</Button>
            <CheckAndAddResources currentUser={currentUser} />
        </>
    );
}
