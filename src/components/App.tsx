import "./App.css";
import Footer from "./Footer";
import MainView from "./MainView";

export const baseURL = "https://c7c1-study-resource-catalog.onrender.com";
// process.env.NODE_ENV === "production"
//     ? "https://c7c1-study-resource-catalog.onrender.com"
//     : "http://localhost:4000";

function App() {
    return (
        <div className="App">
            <MainView />
            <Footer />
        </div>
    );
}

export default App;
