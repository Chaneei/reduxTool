import Leftbar from "./components/leftbar/Leftbar";
import Update from "./components/update/Update";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import "./app.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </>
  );
};

export default App;
