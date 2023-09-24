import { Select } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "../../App";
import { User } from "../../../types/User";

interface UsersDropdownProps {
    setCurrentUser: (user: User | undefined) => void;
}

export default function UsersDropdown({
    setCurrentUser,
}: UsersDropdownProps): JSX.Element {
    const [listOfUsers, setListOfUsers] = useState<User[]>([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get(`${baseURL}/users`);
                const responseList = response.data;
                setListOfUsers(responseList);
            } catch (error) {
                console.error(error);
            }
        }

        fetchUsers();
    }, []);

    const handleUserSelect = (selectedUserName: string) => {
        const selectedUser = listOfUsers.find(
            (oneUser) => oneUser.user_name === selectedUserName
        );
        setCurrentUser(selectedUser);
    };

    return (
        <Select
            data-testid="users-dropdown"
            defaultValue={-1}
            onChange={(e) => handleUserSelect(e.target.value)}
        >
            <option disabled hidden value={-1}>
                Select user
            </option>
            {listOfUsers.map((u) => (
                <option key={u.id} value={u.user_name}>
                    {u.user_name}
                </option>
            ))}
        </Select>
    );
}
