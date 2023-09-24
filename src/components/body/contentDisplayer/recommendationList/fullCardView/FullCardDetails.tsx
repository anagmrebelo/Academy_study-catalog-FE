import {
    Box,
    Heading,
    Link,
    Stack,
    StackDivider,
    Text,
} from "@chakra-ui/react";
import ReasonArea from "../recommendationCard/RecommendationTypeArea";
import TagsArea from "../recommendationCard/TagsArea";
import { Recommendation } from "../../../../../types/Recommendation";

interface FullCardDetailsProps {
    oneRecommendation: Recommendation;
}

export default function FullCardDetails({
    oneRecommendation,
}: FullCardDetailsProps): JSX.Element {
    return (
        <Stack divider={<StackDivider />} spacing="4">
            <Box>
                <Heading size="xs" textTransform="uppercase">
                    Author
                </Heading>
                <Text pt="2" fontSize="sm">
                    {oneRecommendation.author}
                </Text>
            </Box>
            <Box>
                <Heading size="xs" textTransform="uppercase">
                    Link
                </Heading>
                <Link href={oneRecommendation.url} pt="2" fontSize="sm">
                    {oneRecommendation.url}
                </Link>
            </Box>
            <Box>
                <Heading size="xs" textTransform="uppercase">
                    Description
                </Heading>
                <Text pt="2" fontSize="sm">
                    {oneRecommendation.description}
                </Text>
            </Box>
            <Box>
                <Heading size="xs" textTransform="uppercase">
                    Tags
                </Heading>
                <TagsArea oneRecommendation={oneRecommendation} />
            </Box>
            <Box>
                <Heading size="xs" textTransform="uppercase">
                    Content type
                </Heading>
                <Text pt="2" fontSize="sm">
                    {oneRecommendation.content_type}
                </Text>
            </Box>
            <Box>
                <Heading size="xs" textTransform="uppercase">
                    Build phase
                </Heading>
                <Text pt="2" fontSize="sm">
                    {oneRecommendation.build_phase}
                </Text>
            </Box>
            <Box>
                <Heading size="xs" textTransform="uppercase">
                    Type of Recommendation
                </Heading>
                <ReasonArea oneRecommendation={oneRecommendation} />
            </Box>
            <Box>
                <Heading size="xs" textTransform="uppercase">
                    Reason to recommend
                </Heading>
                <Text pt="2" fontSize="sm">
                    {oneRecommendation.reason}
                </Text>
            </Box>
        </Stack>
    );
}
