import { createBrowserRouter } from "react-router-dom";
import Login from "./compoments/Login";
import Home from "./compoments/Home";
import App from "./App";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children : [
            {
                path :'/compoments/Login',
                element: <Login />
            },
            {
                path:'/compoments/Home',
                element: <Home />
            }
        ]
    }


]);

export default router;