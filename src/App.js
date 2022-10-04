import Leftbar from "./components/leftbar/Leftbar";
import Update from "./components/update/Update";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import "./app.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("승찬");
  return (
    <>
      <Navbar name={name} />
      <div className="container">
        <Leftbar name={name} />
        <Update name={name} />
        <Rightbar name={name} />
      </div>
    </>
  );
};

export default App;
