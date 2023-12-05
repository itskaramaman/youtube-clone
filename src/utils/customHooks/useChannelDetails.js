import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_API } from "../constant";

const useChannelDetails = (channelId) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    fetchChannelDetails();
  }, []);

  const fetchChannelDetails = async () => {
    const response = await fetch(
      `${YOUTUBE_CHANNEL_API}&id=${channelId}&key=${API_KEY}`
    );
    const data = await response.json();
    setChannelDetails(data.items[0]);
  };
  return channelDetails;
};

export default useChannelDetails;
