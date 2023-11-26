import { HOME_LOGO, SHORTS_LOGO, SUBSCRIPTION_LOGO } from "../utils/constant";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  if (isSidebarOpen === false) return;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li className="flex gap-5">
          <img alt="home-logo" className="h-5" src={HOME_LOGO} />
          <span>Home</span>
        </li>
        <li className="flex gap-5">
          <img alt="home-logo" className="h-5 ml-1" src={SHORTS_LOGO} />
          <span>Shorts</span>
        </li>
        <li className="flex gap-5">
          <img alt="home-logo" className="h-5" src={SUBSCRIPTION_LOGO} />
          <span>Subscription</span>
        </li>
      </ul>
      <hr className="my-3" />
      <h1 className="font-semibold">Subscription</h1>
      <ul className="ml-2">
        <li className="text-sm">Music</li>
        <li className="text-sm">Sports</li>
        <li className="text-sm">Gaming</li>
        <li className="text-sm">Movies</li>
      </ul>
      <hr className="my-3" />
      <h1 className="font-semibold">Watch Later</h1>
      <ul className="ml-2">
        <li className="text-sm">Music</li>
        <li className="text-sm">Sports</li>
        <li className="text-sm">Gaming</li>
        <li className="text-sm">Movies</li>
      </ul>
      <hr className="my-3" />
    </div>
  );
};

export default Sidebar;
