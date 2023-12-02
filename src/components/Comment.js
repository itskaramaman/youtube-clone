import { Link } from "react-router-dom";
import { YOUTUBE_LIKE_ICON, YOUTUBE_UNLIKE_ICON } from "../utils/constant";
import numFormatter from "../utils/numFormatter";
import moment from "moment";
import { useState } from "react";

const Comment = ({ comment, totalReplyCount, replies }) => {
  console.log(comment, totalReplyCount, replies);
  const [showReplies, setShowReplies] = useState(false);
  const {
    authorProfileImageUrl,
    authorDisplayName,
    authorChannelUrl,
    textDisplay,
    publishedAt,
    likeCount,
    updatedAt,
  } = comment.snippet;

  console.log(comment.snippet?.totalReplyCount);
  return (
    <div className="flex gap-4 mb-8">
      <div>
        {authorProfileImageUrl ? (
          <img
            className="h-10 w-10 rounded-full object-cover"
            alt="author-profile"
            src={authorProfileImageUrl}
          />
        ) : (
          <span className="h-10 w-10 rounded-full bg-red-500">
            {authorDisplayName.substring(0, 1).toUpperCase()}
          </span>
        )}
      </div>
      <div>
        <Link to={authorChannelUrl} className="flex items-baseline gap-1">
          <h4 className="font-bold">{authorDisplayName} </h4>
          <span className="text-xs text-gray-600 font-semibold">
            {updatedAt !== publishedAt
              ? moment(updatedAt).fromNow() + " (edited)"
              : moment(publishedAt).fromNow()}
          </span>
        </Link>
        <p className="text-sm">{textDisplay}</p>
        <p className="flex items-center mt-2">
          <img className="h-4 w-4 mr-1" alt="like" src={YOUTUBE_LIKE_ICON} />
          <span className="text-xs text-gray-600 font-semibold">
            {numFormatter(likeCount)}
          </span>
          <img
            className="h-4 w-4 ml-3"
            alt="unlike"
            src={YOUTUBE_UNLIKE_ICON}
          />
        </p>
        {totalReplyCount > 0 && (
          <div className="mt-2">
            <button
              onClick={() => setShowReplies(!showReplies)}
              className="text-blue-800 font-semibold text-sm rounded-full hover:bg-blue-100 h-9 w-32"
            >
              <span className="mr-2">🔽</span>
              <span>{totalReplyCount} replies</span>
            </button>
            {showReplies && (
              <div className="mt-2">
                {replies?.comments?.map((comment) => (
                  <Comment comment={comment} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
