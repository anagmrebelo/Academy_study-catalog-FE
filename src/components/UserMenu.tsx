import { Button } from "@chakra-ui/react";
import CheckAndAddResources from "./CheckAndAddResources";

export default function UserMenu(): JSX.Element {
    return (
        <>
            <Button>My Study View</Button>
            <CheckAndAddResources />
        </>
    );
}
