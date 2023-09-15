import { useState } from "react";
import LogBar from "./LogBar";
import RecommendationBoard from "./RecommendationBoard";

export default function MainView(): JSX.Element {
    const [currentUser, setCurrentUser] = useState("");
    return (
        <div>
            <LogBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
            <RecommendationBoard currentUser={currentUser} />
        
        </div>
    );
}
