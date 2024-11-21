import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Navbar";
import VendorsIcon from "../../assets/icons/VendorsIcon";
import Newdraw from "../newdraw";
import { FaBars } from "react-icons/fa6";

function LayoutWithNavbar() {
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("isOpen") === "true" ? true : false
  );
  const toggleNavbar = () => {
    const isOpen = localStorage.getItem("isOpen") === "true" ? true : false;

    localStorage.setItem("isOpen", `${!Boolean(isOpen)}`);
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex w-[100%] dark:bg-[#151b25]">
      <div className="h-[100vh]  bg-white dark:bg-[#1d2533]">
        <NavBar isOpen={isOpen} />
        {/* <Newdraw /> */}
      </div>
      <div className="w-full text-black dark:text-white">
        <div className="bg-white h-[80px] w-full flex items-center dark:bg-[#1d2533]">
          <div onClick={toggleNavbar} className="ml-[20px]">
            <FaBars className="text-gray-600 dark:text-white" size={30} />
          </div>
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayoutWithNavbar;
