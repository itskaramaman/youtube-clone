import { Link } from "react-router-dom";
import { ReactComponent as LikeSVG } from "../icons/thumbs-up.svg";
import { ReactComponent as UnlikeSVG } from "../icons/thumbs-down.svg";
import numFormatter from "../utils/numFormatter";
import moment from "moment";
import { useState } from "react";

const Comment = ({ comment, totalReplyCount, replies }) => {
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

  return (
    <div className="flex mb-8">
      <div className="w-[10%]">
        {authorProfileImageUrl ? (
          <img
            className="w-10 rounded-full object-cover"
            alt="author-profile"
            src={authorProfileImageUrl}
          />
        ) : (
          <span className="w-10 rounded-full bg-red-500">
            {authorDisplayName.substring(0, 1).toUpperCase()}
          </span>
        )}
      </div>
      <div className="w-[90%]">
        <Link to={authorChannelUrl} className="flex items-baseline gap-1">
          <h4 className="font-semibold text-sm">{authorDisplayName} </h4>
          <span className="text-xs text-gray-600 font-semibold">
            {updatedAt !== publishedAt
              ? moment(updatedAt).fromNow() + " (edited)"
              : moment(publishedAt).fromNow()}
          </span>
        </Link>
        <p className="text-sm mt-1 sans">{textDisplay}</p>
        <p className="flex items-center mt-2">
          <LikeSVG className="mr-1" />
          <span className="text-xs text-gray-600 font-semibold">
            {numFormatter(likeCount)}
          </span>
          <UnlikeSVG className="ml-3" />
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
