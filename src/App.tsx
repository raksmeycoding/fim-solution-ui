// src/App.tsx
import React from "react";
import LandingPage from "./components/pages/Home/LandingPage";
import { Route, Routes } from "react-router";
import Navbar from "./components/layouts/Navbar/Navbar";
import FimScore from "./components/pages/FimScore/FimScore";
import MainLayout from "./components/layouts/Main/MainLayout";
import NoNavBarLayout from "./components/layouts/Main/NoNavBarLayout";
import MyLoanBorrower from "./components/pages/MyLoan/MyLoanBorrower";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import Login from "./components/pages/Auth/Login";
import SignUP from "./components/pages/Auth/SignUP";
import UserProfile from "./components/pages/Test/UserProfile";

const App: React.FC = () => {
  console.log("NODE_ENV:" + process.env.NODE_ENV);
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="fim-score"
            element={<FimScore />}
          />

          <Route
            path="my-loan"
            element={<MyLoanBorrower />}
          />
        </Route>

        <Route element={<NoNavBarLayout />}>
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Route>

        {/* No Navbar */}
        <Route
          path="/store"
          element={<UserProfile />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<SignUP />}
        />
      </Routes>
    </>
  );
};

export default App;
