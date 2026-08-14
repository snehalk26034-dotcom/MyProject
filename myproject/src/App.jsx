import React from "react";
import Contact from './Components/Contact'
import Navbar from "./components/Navbar";
import Applications from "./Components/Applications";
import CraftVendors from "./Components/CraftVendors";
import FoodVendors from "./Components/FoodVendors";
import Footer from './Components/Footer'

const App = () => {
  return (

    <div>
      <Navbar />
      <Contact />
      <Applications />
      <CraftVendors />
      <FoodVendors />
      <Footer />
    </div>
  );
};

export default App;
