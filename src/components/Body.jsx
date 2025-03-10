import React from "react";
import SideBar from "./SideBar";
import ButtonList from "./ButtonList";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="mt-20 flex flex-row w-screen gap-8 px-4">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
