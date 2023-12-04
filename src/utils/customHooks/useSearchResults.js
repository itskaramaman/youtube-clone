import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_RESULTS_API } from "../constant";

const useSearchResults = (search_query) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchSearchResults();
  }, [search_query]);

  const fetchSearchResults = async () => {
    const response = await fetch(YOUTUBE_SEARCH_RESULTS_API + search_query);
    const data = await response.json();
    setSearchResults(data.items);
  };
  return searchResults;
};

export default useSearchResults;
