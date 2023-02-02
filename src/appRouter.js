import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";
import ShoppingPage from "./components/ShoppingPage";
import LegalPage from "./components/LegalPage";

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Route>
          <Route path="./HomePage" element={<HomePage />} />
          <Route path="./UserProfile" element={<UserProfile />} />
          <Route path="./ShoppingPage" element={<ShoppingPage />} />
          <Route path="/.LegalPage" element={<LegalPage />} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
