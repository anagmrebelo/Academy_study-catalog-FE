import { Button } from "@chakra-ui/react";
import AddNewResource from "./AddNewResource";

export default function UserMenu(): JSX.Element {
    return (
        <>
            <Button>My Study View</Button>
            <AddNewResource />
        </>
    );
}
