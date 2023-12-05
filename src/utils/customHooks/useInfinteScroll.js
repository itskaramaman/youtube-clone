import { useState, useEffect } from "react";

const useInfiniteScroll = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return page;
};

export default useInfiniteScroll;
