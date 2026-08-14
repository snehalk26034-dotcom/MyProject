import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Applications from "./Components/Applications";
import CraftVendors from "./Components/CraftVendors";
import FoodVendors from "./Components/FoodVendors";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/vendors" element={<Contact />} />
        <Route path="/vendors/craft" element={<CraftVendors />} />
        <Route path="/vendors/food" element={<FoodVendors />} />
        <Route path="/vendors/applications" element={<Applications />} />
        <Route path="/events" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tickets" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
