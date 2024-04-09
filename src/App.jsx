import Particules from "./compoments/Particules";
import "./index.css";
import {Outlet} from "react-router-dom";
import Home from "./compoments/Home";






function App() {


  return (
    <>
      <Particules/>
      <Outlet />
    </>
  )
}


export default App;