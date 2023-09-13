import RecommendationCard from "./RecommendationCard";

interface RecommendationBoardProps {
    currentUser: string;
}

export default function RecommendationBoard({
    currentUser,
}: RecommendationBoardProps): JSX.Element {
    return <RecommendationCard currentUser={currentUser} />;
}
