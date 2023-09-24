import { Button, HStack } from "@chakra-ui/react";
import { User } from "../../../types/User";
import UsersDropdown from "./UsersDropdown";

interface LoggingMenuProps {
    currentUser: User | undefined;
    setCurrentUser: (user: User | undefined) => void;
}

export default function LoggingMenu({
    currentUser,
    setCurrentUser,
}: LoggingMenuProps): JSX.Element {
    return (
        <div>
            {currentUser === undefined && (
                <UsersDropdown setCurrentUser={setCurrentUser} />
            )}
            {currentUser !== undefined && (
                <HStack justifyContent={"space-between"} pr={10} pl={10}>
                    <h3 data-testid="logged-in-user">
                        Logged in as {currentUser.user_name}
                    </h3>
                    <Button
                        onClick={() => setCurrentUser(undefined)}
                        data-testid="logout-btn"
                    >
                        Logout
                    </Button>
                </HStack>
            )}
        </div>
    );
}
