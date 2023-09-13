import { useState } from "react";
import LogBar from "./LogBar";

export default function MainView(): JSX.Element {
    const [currentUser, setCurrentUser] = useState("");
    return (
        <div>
            <LogBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        </div>
    );
}
