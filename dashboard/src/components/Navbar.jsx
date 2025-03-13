import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="h-screen w-[15rem] bg-[#1f1f1f] flex flex-col fixed">
        <img src={logo} className="h-20 w-20 self-center mt-4" />
        <div className="bg-transparent flex flex-col mt-4 h-[5rem] justify-around">
          <NavLink
            to="/"
            className="h-[50%] flex justify-start pl-3 items-center"
          >
            <button className="h-[50%] flex text-white justify-start pl-3 items-center">
              Dashboard
            </button>
          </NavLink>
          <NavLink
            to="/students"
            className="h-[50%] flex justify-start pl-3 items-center"
          >
            <button className="h-[50%] flex text-white justify-start items-center pl-3">
              Data
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
