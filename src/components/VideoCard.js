import moment from "moment";
import useChannelDetails from "../utils/customHooks/useChannelDetails";
import { useState } from "react";

const VideoCard = ({ info }) => {
  const [showIframe, setShowIframe] = useState(false);
  const channelDetails = useChannelDetails(info.snippet?.channelId);

  return (
    <div
      className="w-[360px] h-80 cursor-pointer"
      onPointerEnter={() => setShowIframe(true)}
      onPointerLeave={() => setShowIframe(false)}
    >
      {showIframe ? (
        <iframe
          className="shadow-xl w-full"
          height="192"
          src={`https://www.youtube.com/embed/${info.id}?rel=0&autoplay=1&mute=1&controls=0`}
          title="YouTube video player"
        ></iframe>
      ) : (
        <img
          className="w-full h-48 object-cover rounded-lg hover:rounded-none"
          alt="thumbnail"
          src={info?.snippet?.thumbnails?.high?.url}
        />
      )}

      <section className="flex gap-3 my-2 items-start">
        <img
          className="h-10 w-10 rounded-full"
          alt="channel"
          src={channelDetails?.snippet?.thumbnails?.default?.url}
        />
        <div>
          <h1 className="font-sans font-semibold line-clamp-2">
            {info?.snippet?.title}
          </h1>
          <ul className="text-gray-500 text-sm font-semibold">
            <li className="font-sans mb-1">{info?.snippet?.channelTitle}</li>
            <li className="flex gap-1 items-center text-xs">
              {info?.statistics?.viewCount < 1000
                ? info?.statistics?.viewCount < 1000
                : (info?.statistics?.viewCount % 1000) + "K"}{" "}
              views
              <p>&#x2022;</p>
              {moment(info?.snippet?.publishedAt).fromNow()}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default VideoCard;
