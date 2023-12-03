import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../utils/appSlice";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constant";
import SearchResult from "./SearchResult";

const SearchResultContainer = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  const search_query = searchParams.get("search_query");

  const dispatch = useDispatch();
  useEffect(() => {
    fetchSearchResults();
    dispatch(closeSidebar());
  }, [search_query]);

  const fetchSearchResults = async () => {
    const response = await fetch(YOUTUBE_SEARCH_RESULTS_API + search_query);
    const data = await response.json();
    setSearchResults(data.items);
  };

  return (
    <div className="w-screen flex flex-col items-center mt-10">
      {searchResults.slice(0, 5).map((result) => (
        <SearchResult result={result} />
      ))}
    </div>
  );
};

export default SearchResultContainer;
