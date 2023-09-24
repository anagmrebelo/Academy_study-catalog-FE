import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./body/Body";
import axios from "axios";
import Loading from "./Loading";
import { Stack } from "@chakra-ui/react";

export const baseURL = "https://c7c1-study-resource-catalog.onrender.com";
// process.env.NODE_ENV === "production"
//     ? "https://c7c1-study-resource-catalog.onrender.com"
//     : "http://localhost:4000";

function App() {
    const [backendStatus, setBackEndStatus] = useState<string | null>(null);

    useEffect(() => {
        const fetchBackendStatus = async () => {
            const result = await axios.get(`${baseURL}/health-check`);
            setBackEndStatus(result.data);
        };
        fetchBackendStatus();
    }, []);

    return (
        <div className="App">
            {!backendStatus ? (
                <Loading />
            ) : (
                <>
                    <Stack minHeight={"100vh"}>
                        <Header />
                        <Body />
                    </Stack>
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
