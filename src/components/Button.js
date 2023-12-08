import { useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addVideos } from "../utils/videoSlice";

const Button = ({ name, id, activeVideoCategory, setActiveVideoCategory }) => {
  const dispatch = useDispatch();

  const handleButtonClick = async () => {
    let url = `${YOUTUBE_VIDEOS_API}&videoCategoryId=${id}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch(addVideos(data.items));
    setActiveVideoCategory(id);
  };

  return (
    <button
      onClick={() => handleButtonClick()}
      className={`${
        activeVideoCategory === id
          ? "bg-black text-white"
          : "bg-gray-100 text-black hover:bg-gray-200"
      }  font-bold p-2 rounded-md text-sm`}
    >
      {name}
    </button>
  );
};

export default Button;
