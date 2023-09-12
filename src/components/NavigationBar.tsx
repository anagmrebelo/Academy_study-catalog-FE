import { Select } from "@chakra-ui/react";
import axios from "axios";
import { baseURL } from "./App";
import { useEffect } from "react";

interface NavigationBarProps {
    setCurrentUser: (st: string) => void;
}

interface UserList {
    id: number;
    user_name: string;
    is_faculty: boolean;
}

export default function NavigationBar({
    setCurrentUser,
}: NavigationBarProps): JSX.Element {
    let listOfUsers: UserList[] = [];

    useEffect(() => {
        fetchUsers();
    });

    async function fetchUsers() {
        try {
            const response = await axios.get(`${baseURL}/users`);
            listOfUsers = response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const handleUserSelect = (selectedUser: string) =>
        setCurrentUser(selectedUser);

    return (
        <div>
            <Select
                placeholder="Select option"
                onChange={(e) => handleUserSelect(e.target.value)}
            >
                {listOfUsers.map((u) => (
                    <option key={u.id} value={u.user_name}>
                        {u.user_name}
                    </option>
                ))}
            </Select>
        </div>
    );
}
