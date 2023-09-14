// import axios from "axios";
// import { baseURL } from "./App";
import { Button, HStack } from "@chakra-ui/react";
import UsersDropdown from "./UsersDropdown";

interface LogBarProps {
    currentUser: string;
    setCurrentUser: (st: string) => void;
}

export default function LogBar({
    currentUser,
    setCurrentUser,
}: LogBarProps): JSX.Element {
    return (
        <div>
            <HStack justifyContent={"space-between"} p={4}>
                {currentUser === "" && (
                    <UsersDropdown setCurrentUser={setCurrentUser} />
                )}
                {currentUser !== "" && (
                    <>
                        <h3 data-testid="logged-in-user">
                            Logged in as {currentUser}
                        </h3>
                        <Button
                            onClick={() => setCurrentUser("")}
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
