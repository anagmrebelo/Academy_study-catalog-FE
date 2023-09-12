import { useState } from "react";
import NavigationBar from "./NavigationBar";

export default function MainView(): JSX.Element {
    const [currentUser, setCurrentUser] = useState("");
    return (
        <div>
            <NavigationBar setCurrentUser={setCurrentUser} />
        </div>
    );
}
