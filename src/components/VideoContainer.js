import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchPopularVideos();
  }, []);

  const fetchPopularVideos = async () => {
    const response = await fetch(`${YOUTUBE_VIDEOS_API + API_KEY}`);
    const data = await response.json();
    setVideos(data.items);
  };

  return (
    <div className="flex flex-wrap gap-5 my-5 px-3">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
