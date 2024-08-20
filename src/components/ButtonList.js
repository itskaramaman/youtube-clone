import { useState } from "react";
import Button from "./Button";
import categories from "../utils/videoCategories";

const ButtonList = () => {
  const [activeVideoCategory, setActiveVideoCategory] = useState(0);

  return (
    <div className="flex gap-4 left-14 py-2 ml-8 overflow-auto whitespace-nowrap fixed top-14  right-0 bg-white w-full z-10">
      <Button
        name="All"
        id={0}
        activeVideoCategory={activeVideoCategory}
        setActiveVideoCategory={setActiveVideoCategory}
      />
      {categories.slice(0, 10).map((category) => (
        <Button
          key={category.id}
          id={category.id}
          name={category.snippet.title}
          activeVideoCategory={activeVideoCategory}
          setActiveVideoCategory={setActiveVideoCategory}
        />
      ))}
    </div>
  );
};

export default ButtonList;
