import React from "react";
import Contact from './Components/Contact'
import Navbar from "./components/Navbar";
import About from './Components/About'
import Event from "./Components/Event";
import Applications from "./Components/Applications";
import CraftVendors from "./Components/CraftVendors";
import FoodVendors from "./Components/FoodVendors";
import Footer from './Components/Footer'

const App = () => {
    return (

        <div>
            <Navbar />
            <Contact />
            <Event />
            <About />
            <Applications />
            <CraftVendors />
            <FoodVendors />
            <Footer />
        </div>
    );
};

export default App;
