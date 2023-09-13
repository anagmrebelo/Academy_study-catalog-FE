import { HStack, Link } from "@chakra-ui/react";

export default function Footer(): JSX.Element {
    return (
        <HStack justifyContent={"center"} p={4} gap={4}>
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
        </HStack>
    );
}
