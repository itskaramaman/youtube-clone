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
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className=" mt-10 py-10 px-20 container p-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="aspect-video">
            <iframe
              className="h-full w-full rounded-xl"
              src={`https://www.youtube.com/embed/${videoId}?si=fatq_yGSVigalmaC&amp;autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div>
              <h1 className="my-2 font-medium font-sans text-lg line-clamp-2">
                {videoDetails?.snippet?.title}
              </h1>
              <div className="flex items-center gap-4">
                <img
                  className="w-10 rounded-full"
                  alt="channel-logo"
                  src={channelDetails?.snippet?.thumbnails?.high?.url}
                />
                <div>
                  <p className="font-bold line-clamp-1">
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
                  {numFormatter(videoDetails?.statistics?.viewCount)} views
                  Premiered on{" "}
                  {moment(videoDetails?.snippet?.publishedAt).format(
                    "D MMM YYYY"
                  )}
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
    </div>
  );
};

export default WatchPage;
