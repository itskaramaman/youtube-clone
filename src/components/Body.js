import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
