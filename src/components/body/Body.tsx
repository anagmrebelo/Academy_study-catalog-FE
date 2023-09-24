import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import { User } from "../../types/User";
import RecommendationBoard from "./contentDisplayer/ContentDisplayer";
import LoggingMenu from "./loggingMenu/LoggingMenu";

export default function Body(): JSX.Element {
    const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

    return (
        <VStack p={"2vw"} placeItems={"inherit"}>
            <LoggingMenu
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
            />
            <RecommendationBoard currentUser={currentUser} />
        </VStack>
    );
}
