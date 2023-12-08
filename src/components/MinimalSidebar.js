import { HOME_LOGO, SUBSCRIPTION_LOGO } from "../utils/constant";
import { ReactComponent as SHORTS } from "../icons/youtubeshorts.svg";
import { Link } from "react-router-dom";

const MinimalSidebar = () => {
  return (
    <div className="fixed top-16 w-16 bg-white">
      <ul>
        <Link to="/">
          <li className="p-4 hover:bg-gray-100 rounded-md flex flex-col items-center cursor-pointer">
            <img className="w-5" alt="home" src={HOME_LOGO} />
            <small className="text-[.66rem] font-sans">Home</small>
          </li>
        </Link>
        <Link to="/shorts">
          <li className="p-4 hover:bg-gray-100 rounded-md flex flex-col items-center cursor-pointer">
            <SHORTS className="h-5" />
            <small className="text-[.66rem] font-sans">Shorts</small>
          </li>
        </Link>
        <Link to="/subscriptions">
          <li className="p-4 hover:bg-gray-100 rounded-md flex flex-col items-center cursor-pointer">
            <img className="w-5" alt="home" src={SUBSCRIPTION_LOGO} />
            <small className="text-[.66rem] font-sans">Subscription</small>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MinimalSidebar;
