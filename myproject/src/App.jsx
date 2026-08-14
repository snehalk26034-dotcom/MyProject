import React from "react";
import Navbar from "./Components/Navbar";
import AppRoutes from "./Routes/AppRoutes";
import Footer from './Components/Footer'

const App = () => {
    return (
        <div>
            <Navbar />
            <AppRoutes />
            <Footer />
        </div>
    );
};

export default App;
