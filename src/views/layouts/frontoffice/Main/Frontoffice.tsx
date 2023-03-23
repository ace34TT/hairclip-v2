import React from "react";
import FrontendFooter from "../../../components/footer/FrontendFooter";
import FrontendHeader from "../../../components/header/FrontendHeader";
import { Outlet } from "react-router-dom";

function Frontoffice() {
  return (
    <>
      <FrontendHeader></FrontendHeader>
      <Outlet />
      <FrontendFooter></FrontendFooter>
    </>
  );
}

export default Frontoffice;
