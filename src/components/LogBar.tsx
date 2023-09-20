// import axios from "axios";
// import { baseURL } from "./App";
import { Button, HStack } from "@chakra-ui/react";
import UsersDropdown from "./UsersDropdown";
import { User } from "../types/User";

interface LogBarProps {
    currentUser: User | undefined;
    setCurrentUser: (user: User | undefined) => void;
}

export default function LogBar({
    currentUser,
    setCurrentUser,
}: LogBarProps): JSX.Element {
    return (
        <div>
            <HStack justifyContent={"space-between"} p={10}>
                {currentUser === undefined && (
                    <UsersDropdown setCurrentUser={setCurrentUser} />
                )}
                {currentUser !== undefined && (
                    <>
                        <h3 data-testid="logged-in-user">
                            Logged in as {currentUser.user_name}
                        </h3>
                        <Button
                            onClick={() => setCurrentUser(undefined)}
                            data-testid="logout-btn"
                        >
                            Logout
                        </Button>
                    </>
                )}
            </HStack>
        </div>
    );
}
