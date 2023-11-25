import {
  HAMBURGER_LOGO,
  MAGNIFIER_LOGO,
  USER_LOGO,
  YOUTUBE_LOGO,
} from "../utils/constant";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 shadow-lg">
      <section className="flex items-center gap-5 w-3/12">
        <img className="h-6" alt="hamburger-logo" src={HAMBURGER_LOGO} />
        <img className="h-5" alt="youtube-logo" src={YOUTUBE_LOGO} />
      </section>
      <section className="w-6/12">
        <div className="flex justify-between items-center border border-gray-400 rounded-full w-4/5">
          <input
            placeholder="Search"
            className="ml-5 bg-white w-9/12 p-2 focus:outline-none"
            type="text"
          />
          <div className="bg-gray-100 rounded-r-full h-10 w-14 flex items-center justify-center cursor-pointer">
            <img alt="magnifier-logo" className="h-6" src={MAGNIFIER_LOGO} />
          </div>
        </div>
      </section>
      <section className="w-3/12 flex justify-end">
        <img className="h-8" src={USER_LOGO} alt="user-icon" />
      </section>
    </div>
  );
};

export default Header;
