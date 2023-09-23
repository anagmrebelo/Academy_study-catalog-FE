import { useCallback, useEffect, useState } from "react";
import { baseURL } from "./App";
import { Button } from "@chakra-ui/react";
import axios from "axios";

export interface TagCloudView {
    tag_name: string;
}
interface TagCloudProps {
    searchTags: string[];
    setSearchTags: (st: string[]) => void;
}

export default function TagCloud({
    searchTags,
    setSearchTags,
}: TagCloudProps): JSX.Element {
    const [listOfTags, setListOfTags] = useState<TagCloudView[]>([]);

    const fetchTags = useCallback(async () => {
        try {
            const response = await axios.get(baseURL + "/tag-cloud");
            const tagCloud: TagCloudView[] = response.data;
            setListOfTags(tagCloud);
        } catch (error) {
            console.error("Handle error from the TagComponent:", error);
        }
    }, []);
    useEffect(() => {
        fetchTags();
    }, [fetchTags]);
    function handleClickOnTag(tag_name: string): void {
        if (searchTags.includes(tag_name)) {
            const updatedArray = searchTags.filter((item) => item !== tag_name);
            setSearchTags(updatedArray);
        } else {
            setSearchTags([...searchTags, tag_name]);
        }
    }
    function setColorOfButton(tag_name: string) {
        if (searchTags.includes(tag_name)) {
            return "blue";
        }
    }
    return (
        <div data-testid="tag-cloud-area">
            
            {listOfTags.map((t) => (
                <Button
                    data-testid="tag-cloud-button"
                    key={t.tag_name}
                    margin={"3px"}
                    onClick={() => handleClickOnTag(t.tag_name)}
                    colorScheme={setColorOfButton(t.tag_name)}
                >
                    {t.tag_name}
                </Button>
            ))}
        </div>
    );
}
