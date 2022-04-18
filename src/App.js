import "./App.css";
import { Navbar, Body } from "./Component/ExportFile";
import { Routes, Route } from "react-router-dom";
import BodyImg from "./Component/Body/BodyImg";
import TripTour from "./Component/TripTour";
import Discover from "./Component/Discover";


function App() {
  return (
    <>
      <Navbar />
      <Body />
      <BodyImg />
      <TripTour />
      <Discover />
      <Routes>
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
