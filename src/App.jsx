import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar></Navbar>
      <div className="max-w-7xl mx-auto px-2 lg:px-0">
            <Outlet></Outlet>
      </div>
        </>
    );
}

export default App;
