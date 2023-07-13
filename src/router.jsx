
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Primarch from "./components/Primarchs.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

    },
    {
        path: "primarchs/:primarchId",
        element: <Primarch/>
    }
]);

export default router;