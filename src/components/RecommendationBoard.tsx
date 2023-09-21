import { Box, Container, HStack, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Recommendation } from "../types/Recommendation";
import { User } from "../types/User";
import { baseURL } from "./App";
import { SearchBar } from "./SearchBar";
import TagCloud from "./TagCloud";
import UserMenu from "./UserMenu";
import RecommendationCard from "./recommendationCard/RecommendationCard";

interface RecommendationBoardProps {
    currentUser: User | undefined;
}

export default function RecommendationBoard({
    currentUser,
}: RecommendationBoardProps): JSX.Element {
    const [recommendationList, setRecommendationList] = useState<
        Recommendation[]
    >([]);
    const [searchedPhrase, setSearchedPhrase] = useState("");
    const [searchTags, setSearchTags] = useState<string[]>([]);
    const [studyView, setStudyView] = useState<boolean>(false);

    useEffect(() => {
        fetchRecommendations(setRecommendationList, studyView, currentUser?.id);
    }, [studyView, currentUser?.id]);

    return (
        <>
            <HStack>
                {currentUser !== undefined && (
                    <UserMenu
                        currentUser={currentUser}
                        studyView={studyView}
                        setStudyView={setStudyView}
                        setRecommendationList={setRecommendationList}
                    />
                )}
                {!studyView && (
                    <SearchBar
                        searchedPhrase={searchedPhrase}
                        setSearchedPhrase={setSearchedPhrase}
                        setRecommendationList={setRecommendationList}
                        searchTags={searchTags}
                        setSearchTags={setSearchTags}
                        currentUser={currentUser}
                    />
                )}
            </HStack>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <SimpleGrid spacing="10px" width="70%" columns={3}>
                    {recommendationList.map((r) => (
                        <Box key={r.url}>
                            <RecommendationCard
                                setRecommendationList={setRecommendationList}
                                oneRecommendation={r}
                                currentUser={currentUser}
                            />
                        </Box>
                    ))}
                </SimpleGrid>

                <Container width={"30%"}>
                    <TagCloud
                        searchTags={searchTags}
                        setSearchTags={setSearchTags}
                    />
                </Container>
            </div>
        </>
    );
}

export async function fetchRecommendations(
    setRecommendationList: (rec: Recommendation[]) => void,
    studyView: boolean,
    user_id: number | undefined
) {
    let endpoint = "";
    if (studyView && user_id) {
        endpoint = "/study-list/" + user_id.toString();
    } else {
        endpoint = "/recommendation/recent10";
    }
    try {
        const response = await axios.get(`${baseURL}${endpoint}`);
        const responseList = response.data;
        setRecommendationList(responseList);
    } catch (error) {
        console.error(error);
    }
}
