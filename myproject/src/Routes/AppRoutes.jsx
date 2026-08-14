import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home"
import About from "../Components/About";
import Event from "../Components/Event";
import Contact from "../Components/Contact";
import CraftVendors from "../Components/CraftVendors";
import FoodVendors from "../Components/FoodVendors";
import Applications from "../Components/Applications";
import { HiHome } from "react-icons/hi";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vendors/craft" element={<CraftVendors />} />
        <Route path="/vendors/food" element={<FoodVendors />} />
        <Route path="/vendors/applications" element={<Applications />} />

        {/* For unknown URLs */}
        <Route path="*" element={<About />} />
    </Routes>
);

export default AppRoutes;
