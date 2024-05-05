import Particules from "./compoments/Particules";
// import "./styles/index.css";
import {Outlet} from "react-router-dom";

function App() {


  return (
    <>
      <Particules/>
      <Outlet />
    </>
  )
}


export default App;