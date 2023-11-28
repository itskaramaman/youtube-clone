import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  return (
    <div className="flex">
      <Sidebar />
      <div
        className={isSidebarOpen ? "bg-gray-300 overflow-hidden" : undefined}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
