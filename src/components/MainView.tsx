import { useState } from "react";
import LogBar from "./LogBar";
import RecommendationBoard from "./RecommendationBoard";
import { User } from "../types/User";

export default function MainView(): JSX.Element {
    const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

    return (
        <div>
            <LogBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
            <RecommendationBoard currentUser={currentUser} />
        </div>
    );
}
