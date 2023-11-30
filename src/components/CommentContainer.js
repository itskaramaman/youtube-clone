import { useEffect } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/constant";

const CommentContainer = ({ videoId }) => {
  useEffect(() => {
    fetchVideoComments();
  }, []);

  const fetchVideoComments = async () => {
    const response = await fetch(YOUTUBE_COMMENTS_API + videoId);
    const data = await response.json();
    console.log(data);
  };
  return <div>CommentContainer</div>;
};

export default CommentContainer;
