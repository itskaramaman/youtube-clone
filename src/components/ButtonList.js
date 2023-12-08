import { useEffect, useState } from "react";
import Button from "./Button";
import { YOUTUBE_CATEGORIES_API } from "../utils/constant";

const ButtonList = () => {
  const [categories, setCatogries] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await fetch(YOUTUBE_CATEGORIES_API);
    const data = await response.json();
    setCatogries(data.items);
  };

  return (
    <div className="flex gap-4 py-2 ml-8 overflow-auto whitespace-nowrap fixed top-14 left-12 right-0 bg-white w-full z-10">
      <Button name="All" />
      {categories.slice(0, 10).map((category) => (
        <Button key={category.etag} name={category.snippet.title} />
      ))}
    </div>
  );
};

export default ButtonList;
