import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams, Link } from "react-router-dom";
import useVideoAndChannelDetails from "../utils/customHooks/useVideoAndChannelDetails";
import numFormatter from "../utils/numFormatter";
import moment from "moment";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import useSearchResults from "../utils/customHooks/useSearchResults";
import WatchPageItem from "./WatchPageItem";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [showCompleteDescription, setShowCompleteDescription] = useState(false);
  const [videoDetails, channelDetails] = useVideoAndChannelDetails(videoId);

  const searchResults = useSearchResults(
    videoDetails?.snippet?.title?.replaceAll(" ", "+")
  );
  const dispatch = useDispatch();
  console.log(searchResults);
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="py-10 px-20 flex gap-5">
      <div className="w-[640px]">
        <iframe
          className="shadow-xl rounded-xl"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}?si=fatq_yGSVigalmaC`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div>
          <h1 className="my-2 font-extrabold text-lg">
            {videoDetails?.snippet?.title}
          </h1>
          <div className="flex items-center gap-4">
            <img
              className="w-10 rounded-full"
              alt="channel-logo"
              src={channelDetails?.snippet?.thumbnails?.high?.url}
            />
            <div>
              <p className="font-extrabold">
                {videoDetails?.snippet?.channelTitle}
              </p>
              <p className="text-xs text-gray-500">
                {numFormatter(channelDetails?.statistics?.subscriberCount)}{" "}
                subscribers
              </p>
            </div>
            <button className="bg-black text-white font-semibold rounded-full p-1 h-9 w-24">
              Subscribe
            </button>
          </div>
          <div className="bg-gray-100 hover:bg-gray-200 whitespace-pre-line p-3 rounded-lg mt-4 text-sm">
            <p className="font-bold">
              {videoDetails?.statistics?.viewCount} views Premiered on{" "}
              {moment(videoDetails?.snippet?.publishedAt).format("D MMM YYYY")}
            </p>
            <>
              {!showCompleteDescription ? (
                <div>
                  <p>
                    {videoDetails?.snippet?.description.substring(0, 154)}
                    <span
                      className="font-semibold cursor-pointer"
                      onClick={() => setShowCompleteDescription(true)}
                    >
                      ...more
                    </span>
                  </p>
                </div>
              ) : (
                <div>
                  <p>{videoDetails?.snippet?.description}</p>
                  <button
                    className="font-semibold"
                    onClick={() => {
                      setShowCompleteDescription(false);
                    }}
                  >
                    Show less
                  </button>
                </div>
              )}
            </>
          </div>
        </div>
        {videoDetails?.snippet?.liveBroadcastContent === "none" && (
          <CommentContainer videoId={videoId} />
        )}
      </div>
      {videoDetails?.snippet?.liveBroadcastContent === "live" ? (
        <LiveChat />
      ) : (
        <div className="w-3/12">
          {searchResults?.map((result) => (
            <Link
              key={result?.id?.videoId}
              to={`/watch?v=${result?.id?.videoId}`}
            >
              <WatchPageItem result={result} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchPage;
