import { Checkbox } from "@chakra-ui/react";
import axios from "axios";
import { Recommendation } from "../../../../../types/Recommendation";
import { User } from "../../../../../types/User";
import { baseURL } from "../../../../App";

interface AdditionToStudyListAreaProps {
    currentUser: User | undefined;
    oneRecommendation: Recommendation;
}

export function AdditionToStudyListArea({
    currentUser,
    oneRecommendation,
}: AdditionToStudyListAreaProps): JSX.Element {
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
            const encodedUrl = encodeURIComponent(oneRecommendation.url);
            try {
                await axios.delete(
                    `${baseURL}/study-list/${currentUser?.id}/${encodedUrl}`
                );
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
