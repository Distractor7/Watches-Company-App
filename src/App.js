import "./new.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";
import ShoppingPage from "./components/ShoppingPage";
import LegalPage from "./components/LegalPage";
import InterestCalculator from "./components/interestCalculator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <ul
            id="nav-list"
            style={{ display: "flex", listStyleType: "none", padding: 0 }}
          >
            <li
              style={{
                display: "inline-block",
                padding: "0 10px",
              }}
            >
              <Link className="navBar" to="/home">
                Home
              </Link>
            </li>
            <li style={{ display: "inline-block", padding: "0 10px" }}>
              <Link className="navBar" to="/userProfile">
                User Profile
              </Link>
            </li>
            <li style={{ display: "inline-block", padding: "0 10px" }}>
              <Link className="navBar" to="/shoppingPage">
                Shopping Page
              </Link>
            </li>
            <li style={{ display: "inline-block", padding: "0 10px" }}>
              <Link className="navBar" to="/legalPage">
                Legal Page
              </Link>
            </li>
            <li style={{ display: "inline-block", padding: "0 10px" }}>
              <Link className="navBar" to="/interestCalculator">
                Interest Calculator
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/shoppingPage" element={<ShoppingPage />} />
          <Route path="/legalPage" element={<LegalPage />} />
          <Route path="/interestCalculator" element={<InterestCalculator />} />
        </Routes>
      </BrowserRouter>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
