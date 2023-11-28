import { YOUTUBE_CHANNEL_API, YOUTUBE_VIDEO_API } from "../constant";
import { useEffect, useState } from "react";

const useVideoAndChannelDetails = (videoId) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    fetchVideoAndChannelDetails();
  }, []);

  const fetchVideoDetails = async () => {
    const response = await fetch(
      `${YOUTUBE_VIDEO_API}&id=${videoId}&key=${API_KEY}`
    );
    const data = await response.json();
    return data.items[0];
  };

  const fetchChannelDetails = async (channelTitle) => {
    const response = await fetch(
      `${YOUTUBE_CHANNEL_API}&id=${channelTitle}&key=${API_KEY}`
    );
    const data = await response.json();
    return data.items[0];
  };

  const fetchVideoAndChannelDetails = async () => {
    const videoDetails = await fetchVideoDetails();
    const channelDetails = await fetchChannelDetails(
      videoDetails?.snippet?.channelId
    );
    setVideoDetails(videoDetails);
    setChannelDetails(channelDetails);
  };
  return [videoDetails, channelDetails];
};

export default useVideoAndChannelDetails;
