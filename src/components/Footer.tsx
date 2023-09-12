import { Link } from "@chakra-ui/react";

export default function Footer(): JSX.Element {
    return (
        <div>
            <Link
                href="https://github.com/Julieta-Sanguedolce/C7C1-frontend"
                isExternal
            >
                Frontend Repo
            </Link>
            <Link
                href="https://github.com/virtutae/C7C1-study-resource-catalog-backend-"
                isExternal
            >
                Backend Repo
            </Link>
        </div>
    );
}
