import moment from "moment";
import useChannelDetails from "../utils/customHooks/useChannelDetails";

const VideoCard = ({ info }) => {
  const channelDetails = useChannelDetails(info.snippet?.channelId);

  return (
    <div className="w-[360px] h-80 cursor-pointer">
      <img
        className="w-full h-48 object-cover rounded-lg hover:rounded-none"
        alt="thumbnail"
        src={info?.snippet?.thumbnails?.high?.url}
      />

      <section className="flex gap-3 my-2 items-start">
        <img
          className="h-10 w-10 rounded-full"
          alt="channel"
          src={channelDetails?.snippet?.thumbnails?.default?.url}
        />
        <div>
          <h1 className="font-extrabold">
            {info?.snippet?.title.length < 80
              ? info?.snippet?.title
              : info?.snippet?.title.substring(0, 80) + "..."}
          </h1>
          <ul className="text-gray-500 text-sm font-semibold">
            <li className="mt-1">{info?.snippet?.channelTitle}</li>
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
