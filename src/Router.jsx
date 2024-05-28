import { createBrowserRouter } from "react-router-dom";
import Login from "./compoments/Login";
import Home from "./page/Home";
import Text3D from "./compoments/Text3D";
import Projet from "./page/Projet";
import About from "./page/About";
import CodeWars from "./page/CodeWars";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "",
                element: <Home />,
            },
            {
                path: "3D",
                element: <Text3D />,
            },
            {
                path: "projet",
                element: <Projet />,
            },
            {
                path: "about",
                element: <About />,
                
            },
            {
                path: "codewars",
                element: <CodeWars />,
                loader: () =>
                    fetch("https://www.codewars.com/api/v1/users/julien44830/code-challenges/completed?page={page}"),
            },
        ],
        errorElement: <h1>not found</h1>,
    },
]);

export default router;
