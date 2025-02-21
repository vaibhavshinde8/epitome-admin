import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import Property from "./pages/Property";
import User from "./pages/User";
import Transactions from "./pages/Transactions";
import Reviews from "./pages/Reviews";

function App() {
    return (
        <Router>
            <div className="flex">
                <Sidebar /> {/* Sidebar is always visible */}
                <div className="flex-1 p-6">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/property" element={<Property />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/transactions" element={<Transactions />} />
                        <Route path="/reviews" element={<Reviews />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;





