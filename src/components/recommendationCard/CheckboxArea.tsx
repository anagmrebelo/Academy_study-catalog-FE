import { Checkbox } from "@chakra-ui/react";
import axios from "axios";
import { User } from "../../types/User";
import { baseURL } from "../App";
import { Recommendation } from "../../types/Recommendation";

interface CheckboxAreaProps {
    currentUser: User | undefined;
    oneRecommendation: Recommendation;
}

export function CheckboxArea({
    currentUser,
    oneRecommendation,
}: CheckboxAreaProps): JSX.Element {
    async function handleAddToStudyList(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        const isChecked = e.target.checked;
        const dataToSend = {
            user_id: currentUser?.id,
            url: oneRecommendation.url,
        };
        if (isChecked) {
            try {
                await axios.post(baseURL + "/study-list", dataToSend);
            } catch (error) {
                console.error("Error adding to study list", error);
            }
        } else {
            try {
                await axios.delete(baseURL + "/study-list", {
                    data: dataToSend,
                });
            } catch (error) {
                console.error("Error deleting from study list", error);
            }
        }
    }
    return (
        <>
            {currentUser && (
                <Checkbox onChange={handleAddToStudyList}>
                    Add to study list
                </Checkbox>
            )}
        </>
    );
}
