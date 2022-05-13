//Style
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
//components import
import Navbar from "./Components/Navbar";
import Home from "./Pages/home/Home";
import Bonuses from "./Pages/bonuses/Bonuses";
import About from "./Pages/about/About";
import FoodMenus from "./Pages/foodMenus/FoodMenus";
import ToOrder from "./Pages/toOrder/ToOrder";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bonuses" element={<Bonuses />} />
          <Route path="/about" element={<About />} />
          <Route path="/foodMenus" element={<FoodMenus />} />
          <Route path="/toOrder" element={<ToOrder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
