import { useState } from "react";
import LogBar from "./LogBar";
import RecommendationBoard from "./RecommendationBoard";
import { User } from "../types/User";
import { VStack } from "@chakra-ui/react";

export default function MainView(): JSX.Element {
    const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

    return (
        <VStack p={"2vw"} placeItems={"inherit"}>
            <LogBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
            <RecommendationBoard currentUser={currentUser} />
        </VStack>
    );
}
