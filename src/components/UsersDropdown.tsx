import { Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface User {
    id: number;
    user_name: string;
    is_faculty: boolean;
}

interface UsersDropdownProps {
    setCurrentUser: (st: string) => void;
}

export default function UsersDropdown({
    setCurrentUser,
}: UsersDropdownProps): JSX.Element {
    const [listOfUsers, setListOfUsers] = useState<User[]>([]);

    useEffect(() => {
        // async function fetchUsers() {
        //     try {
        //         const response = await axios.get(`${baseURL}/users`);
        //         const responseList = response.data;
        //         setListOfUsers(responseList);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }

        // fetchUsers();
        const people = [
            { id: 1, user_name: "John Doe", is_faculty: false },
            { id: 2, user_name: "Jane Smith", is_faculty: true },
            { id: 3, user_name: "Bob Johnson", is_faculty: false },
            { id: 4, user_name: "Alice Brown", is_faculty: true },
            { id: 5, user_name: "Ella Wilson", is_faculty: false },
        ];
        setListOfUsers(people);
    }, []);
    const handleUserSelect = (selectedUser: string) =>
        setCurrentUser(selectedUser);

    return (
        <Select
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
