import "./styles/index.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import IsLoadingContext from "./contexts/HomeLoadingContext";

function App() {
    const [loading, setLoading] = useState(true);


    return (
        <>
            <IsLoadingContext.Provider
                value={{
                    loading: loading,
                    setLoading: setLoading,
                }}
            >
                <Outlet />
            </IsLoadingContext.Provider>
        </>
    );
}

export default App;
