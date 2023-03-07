import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Root() {
  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center divide-y divide-solid">
      <NavBar />
      <Outlet />
    </div>
  );
}
