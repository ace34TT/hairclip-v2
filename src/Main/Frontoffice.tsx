import { Outlet } from "react-router-dom";
import FrontendFooter from "../components/footer/FrontendFooter";
import FrontendHeader from "../components/header/FrontendHeader";

function Frontoffice() {
  return (
    <>
      <FrontendHeader />
      <Outlet />
      <FrontendFooter />
    </>
  );
}

export default Frontoffice;
