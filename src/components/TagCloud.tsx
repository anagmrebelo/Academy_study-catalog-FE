import { useCallback, useEffect, useState } from "react";
import { baseURL } from "./App";
import { Button } from "@chakra-ui/react";
import axios from "axios";

interface TagCloudView {
    tag_name: string;
}

export default function TagCloud(): JSX.Element {
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

    return (
        <div>
            {listOfTags.map((t) => (
                <Button key={t.tag_name} margin={"3px"}>
                    {t.tag_name}
                </Button>
            ))}
        </div>
    );
}
