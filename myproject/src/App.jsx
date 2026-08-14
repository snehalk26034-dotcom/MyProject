import React from "react";
import Contact from './Components/Contact'
import Navbar from "./components/Navbar";
import Applications from "./Components/Applications";
import CraftVendors from "./Components/CraftVendors";
import FoodVendors from "./Components/FoodVendors";

const App = () => {
  return (

    <div>
      <Navbar />
      <Contact />
      <Applications />
      <CraftVendors />
      <FoodVendors />
    </div>
  );
};

export default App;
