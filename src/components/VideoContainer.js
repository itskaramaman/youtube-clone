import { useEffect, useRef } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useInfiniteScroll from "../utils/customHooks/useInfinteScroll";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";
import ShimmerUI from "./ShimmerUI";

const VideoContainer = () => {
  const videos = useSelector((store) => store.videos);
  const infiniteScroll = useInfiniteScroll();
  const nextPageTokenRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPopularVideos();
  }, [infiniteScroll]);

  const fetchPopularVideos = async () => {
    let url = YOUTUBE_VIDEOS_API;
    if (nextPageTokenRef.current) {
      url = `${YOUTUBE_VIDEOS_API}&pageToken=${nextPageTokenRef.current}`;
    }
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    nextPageTokenRef.current = data.nextPageToken;
    dispatch(addVideos([...videos, ...data.items]));
  };

  if (!videos || videos.length === 0) return <ShimmerUI />;

  return (
    <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
