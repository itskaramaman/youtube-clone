import { HOME_LOGO, SHORTS_LOGO, SUBSCRIPTION_LOGO } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../utils/appSlice";
import { HAMBURGER_LOGO } from "../utils/constant";
import { YOUTUBE_LOGO } from "../utils/constant";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  const dispatch = useDispatch();

  if (isSidebarOpen === false) return;

  return (
    <div className="px-4 shadow-lg w-60 h-full fixed bg-white overflow-auto z-50">
      <section className="flex items-center gap-5 py-4">
        <img
          onClick={() => dispatch(toggleSidebar())}
          className="h-6 cursor-pointer"
          alt="hamburger-logo"
          src={HAMBURGER_LOGO}
        />
        <Link to="/">
          <img className="h-5" alt="youtube-logo" src={YOUTUBE_LOGO} />
        </Link>
      </section>
      <ul>
        <Link to="/">
          <li className="flex gap-5 w-48 h-10 px-3 text-sm font-semibold cursor-pointer rounded-md hover:bg-slate-100 ">
            <img alt="home-logo" className="h-5 my-auto" src={HOME_LOGO} />
            <span className="my-auto">Home</span>
          </li>
        </Link>
        <li className="flex gap-5 w-48 h-10 px-3 text-sm rounded-md font-semibold cursor-pointer hover:bg-slate-100">
          <img alt="home-logo" className="h-5 ml-1 my-auto" src={SHORTS_LOGO} />
          <span className="my-auto">Shorts</span>
        </li>
        <li className="flex gap-5 w-48 h-10 px-3 text-sm rounded-md font-semibold cursor-pointer hover:bg-slate-100">
          <img
            alt="home-logo"
            className="h-5 my-auto"
            src={SUBSCRIPTION_LOGO}
          />
          <span className="my-auto">Subscription</span>
        </li>
      </ul>
      <hr className="my-3" />
      <h1 className="font-semibold">Subscription</h1>
      <ul>
        <li className="w-48 h-10 px-3 text-sm rounded-md font-semibold cursor-pointer hover:bg-slate-100 py-auto flex items-center">
          <p>Music</p>
        </li>
        <li className="w-48 h-10 px-3 text-sm rounded-md font-semibold cursor-pointer hover:bg-slate-100 flex items-center">
          <p>Sports</p>
        </li>
        <li className="w-48 h-10 px-3 text-sm rounded-md font-semibold cursor-pointer hover:bg-slate-100 flex items-center">
          <p>Gaming</p>
        </li>
        <li className="w-48 h-10 px-3 text-sm rounded-md font-semibold cursor-pointer hover:bg-slate-100 flex items-center">
          <p>Movies</p>
        </li>
      </ul>
      <hr className="my-3" />
      <h1 className="font-semibold">Watch Later</h1>
      <ul>
        <li className="w-48 h-10 px-3 text-sm rounded-md font-semibold cursor-pointer hover:bg-slate-100 py-auto flex items-center">
          <p>Music</p>
        </li>
        <li className="w-48 h-10 px-3 text-sm rounded-md font-semibold cursor-pointer hover:bg-slate-100 flex items-center">
          <p>Sports</p>
        </li>
        <li className="w-48 h-10 px-3 text-sm rounded-md font-semibold cursor-pointer hover:bg-slate-100 flex items-center">
          <p>Gaming</p>
        </li>
        <li className="w-48 h-10 px-3 text-sm rounded-md font-semibold cursor-pointer hover:bg-slate-100 flex items-center">
          <p>Movies</p>
        </li>
      </ul>
      <hr className="my-3" />
    </div>
  );
};

export default Sidebar;
