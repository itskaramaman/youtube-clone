import {
  HAMBURGER_LOGO,
  MAGNIFIER_LOGO,
  USER_LOGO,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_SUGGESTION_API,
} from "../utils/constant";

import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResult } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      const getCacheResult = searchCache[searchQuery];
      if (getCacheResult) {
        setSearchSuggestions(getCacheResult);
      } else {
        fetchSuggestions();
        dispatch(cacheResult({ key: searchQuery, value: searchSuggestions }));
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const data = await response.json();
    setSearchSuggestions(data[1]);
  };

  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center p-4 shadow-lg">
      <section className="flex items-center gap-5 w-3/12">
        <img
          onClick={() => dispatch(toggleSidebar())}
          className="h-6 cursor-pointer"
          alt="hamburger-logo"
          src={HAMBURGER_LOGO}
        />
        <img className="h-5" alt="youtube-logo" src={YOUTUBE_LOGO} />
      </section>
      <section className="w-6/12">
        <div className="flex justify-between items-center border border-gray-400 rounded-full w-4/5x">
          <div>
            <input
              placeholder="Search"
              className="ml-5 bg-white w-full p-2 focus:outline-none"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            {showSuggestions && (
              <div className="absolute ml-5 mt-3 rounded-md bg-white shadow-2xl w-[540px]">
                {searchSuggestions.map((suggestion) => (
                  <p className="p-1 hover:bg-gray-200">{suggestion}</p>
                ))}
              </div>
            )}
          </div>
          <div className="bg-gray-100 rounded-r-full h-10 w-14 flex items-center justify-center cursor-pointer border-l-gray-900">
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
