import React, { ChangeEvent, EventHandler, useState } from "react";
import FimLogo from "../../images/logo-finance.svg";
import iconSearch from "../../images/icon-search.svg";
import navWarBackground from "../../images/nav-wav-background.svg";
import useInputHook from "../../hooks/useInputHook";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const {
    isInputFocused,
    isRemainingText,
    handleFocus,
    handleBlur,
    handleChange,
  } = useInputHook();

  const navigate = useNavigate();

  return (
    <div className="font-satoshi backdrop-blur-3xl backdrop-brightness-100   flex flew-row gap-8 justify-between items-center text-xl fixed top-0 left-0 right-0 z-20  px-8 py-4">
      <div className="logo">
        {/* <img
          src={FimLogo}
          alt="fimLogo"
        /> */}
        <div className="FiMSolutionn text-3xl font-bold">FiMSolution</div>
      </div>

      <div className="navbarWrapper  flex flew-row gap-8 ">
        <NavLink
          to={""}
          className={({ isActive, isPending }) =>
            isActive ? "text-teal-500 font-bold" : isPending ? "" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/fim-score"}
          className={({ isActive, isPending }) =>
            isActive ? "text-teal-500 font-bold" : isPending ? "" : ""
          }
        >
          FiMscore
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isActive ? "text-teal-500 font-bold" : isPending ? "" : ""
          }
        >
          About Us
        </NavLink>
        <NavLink
          to={"/help"}
          className={({ isActive, isPending }) =>
            isActive ? "text-teal-500 font-bold" : isPending ? "" : ""
          }
        >
          Help
        </NavLink>
        <NavLink
          to={"/my-loan"}
          className={({ isActive, isPending }) =>
            isActive ? "text-teal-500 font-bold" : isPending ? "" : ""
          }
        >
          <p className="bg-yellow-500 rounded px-2 text-white">My Loan</p>
        </NavLink>
      </div>

      <div className="nav-search-box flex flex-row items-center justify-between  w-[430px]">
        <div className="inputBox-with-search-icon relative flex flex-row items-center">
          <div className="bg-white w-[300px] h-[45px] absolute rounded-md"></div>

          <div className="nav-search-and-text flex flex-row  absolute items-center gap-2 px-2">
            {!isInputFocused && !isRemainingText && (
              <>
                <img
                  className="h-[24px]"
                  src={iconSearch}
                  alt="navSearchIcon"
                />
                <div className="nav-search-text">Search</div>
              </>
            )}
          </div>

          <input
            className="w-[300px] h-[45px] rounded-md absolute outline-none px-2 bg-transparent"
            type="text"
            title="search-input"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>

        <button
          onClick={() => navigate("/login")}
          className="login w-[100px] bg-white  flex flex-row items-center justify-center h-[45px] rounded-md"
        >
          <div className="">Login</div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
