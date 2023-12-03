import { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/constant";
import Comment from "./Comment";

const CommentContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchVideoComments();
  }, []);

  const fetchVideoComments = async () => {
    const response = await fetch(YOUTUBE_COMMENTS_API + videoId);
    const data = await response.json();
    setComments(data.items);
  };

  return (
    <div className="mt-5">
      {comments?.map((comment) => (
        <Comment
          key={comment.etag}
          comment={comment.snippet?.topLevelComment}
          totalReplyCount={comment.snippet?.totalReplyCount}
          replies={comment.replies}
        />
      ))}
    </div>
  );
};

export default CommentContainer;
