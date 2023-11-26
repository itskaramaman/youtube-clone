import Sidebar from "./Sidebar";
import Main from "./Main";
import { useSelector } from "react-redux";

const Body = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  return (
    <div className="flex">
      <Sidebar />
      <div className={isSidebarOpen && "bg-gray-300 overflow-hidden"}>
        <Main />
      </div>
    </div>
  );
};

export default Body;
