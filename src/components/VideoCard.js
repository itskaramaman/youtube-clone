import moment from "moment";
import { YOUTUBE_DOT_ICON } from "../utils/constant";

const VideoCard = ({ info }) => {
  return (
    <div className="w-96 h-80 cursor-pointer">
      <img
        className="w-full h-52 object-cover rounded-lg hover:rounded-none"
        alt="thumbnail"
        src={info?.snippet?.thumbnails?.medium?.url}
      />
      <div>
        <h1 className="font-extrabold my-1 text-sm">
          {info?.snippet?.title.length < 100
            ? info?.snippet?.title
            : info?.snippet?.title.substring(0, 100) + "..."}
        </h1>
        <ul className="text-gray-500 text-sm font-semibold">
          <li>{info?.snippet?.channelTitle}</li>
          <li className="flex gap-2 items-center">
            {info?.statistics?.viewCount < 1000
              ? info?.statistics?.viewCount < 1000
              : (info?.statistics?.viewCount % 1000) + "K"}
            <img alt="youtube-dot" className="h-2" src={YOUTUBE_DOT_ICON} />
            {moment(info?.snippet?.publishedAt).fromNow()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
