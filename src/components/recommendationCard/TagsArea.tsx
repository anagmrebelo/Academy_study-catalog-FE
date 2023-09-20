import { Badge, Stack } from "@chakra-ui/react";
import { Recommendation } from "../../types/Recommendation";

interface TagsAreaProps {
    oneRecommendation: Recommendation;
}

export default function TagsArea({
    oneRecommendation,
}: TagsAreaProps): JSX.Element {
    const tagList: string[] = oneRecommendation.tags
        .split("#")
        .filter((t) => t !== "");

    return (
        <Stack direction="row" height={"1.5rem"} noOfLines={1}>
            {tagList.map((t) => (
                <Badge key={t} borderRadius="full" px="2" colorScheme="teal">
                    {t}
                </Badge>
            ))}
        </Stack>
    );
}
