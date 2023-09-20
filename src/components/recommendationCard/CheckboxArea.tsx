import { Checkbox } from "@chakra-ui/react";
import { User } from "../../types/User";
import axios from "axios";
import { baseURL } from "../App";
import { Recommendation } from "../RecommendationBoard";

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
                const response = await axios.post(
                    baseURL + "/study-list",
                    dataToSend
                );
                console.log(response);
            } catch (error) {
                console.error("Error adding to study list", error);
            }
        } else {
            const response = await axios.delete(baseURL + "/study-list", {
                data: dataToSend,
            });
            console.log(response);
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
